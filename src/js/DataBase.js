import * as firebase from 'firebase/app'
import 'firebase/firebase-firestore'

export default class DataBase{
    constructor(totalClick, timeRemainig){
        this.firebaseConfig = {
            apiKey: "AIzaSyDLWBg9iobB8NWuYpvDZofsYb5fVGoWEnQ",
            authDomain: "memorygame-cf30e.firebaseapp.com",
            databaseURL: "https://memorygame-cf30e.firebaseio.com",
            projectId: "memorygame-cf30e",
            storageBucket: "memorygame-cf30e.appspot.com",
            messagingSenderId: "311366581245",
            appId: "1:311366581245:web:c693adf541d66c9897f794",
            measurementId: "G-697MT2FSSH"

        };
        this.totalClick = totalClick;
        this.timeRemainig = timeRemainig;

        this.firebase = firebase;
        if (!this.firebase.apps.length) {
            this.firebase.initializeApp(this.firebaseConfig)
        }
        this.dataBase = this.firebase.firestore();
        this.nickName = document.getElementById('nickname');

        this.nickPodium = [...document.querySelectorAll('.score-list__nick')];
        this.scorePodium = [...document.querySelectorAll('.score-list__points')];
    
        this.scoreList = document.querySelector('.score-list');

        this.podiumTable =[]

    }

    showNickName(){

        this.dataBase.collection('scores').add({
            name: `${this.nickName.value}`,
            score: (this.totalClick * (this.timeRemainig - 1))
        });

    }

    getData(){
        
        this.dataBase.collection('scores')
            .orderBy('score', "desc")
                .get()
                    .then((snapshot) => {
                        snapshot.docs.forEach((doc) => {
                        this.podiumTable.push(doc.data())
                        })
                    this.addDataToBoard(this.podiumTable)
                    })
    }

    addDataToBoard(podiumTable){

       this.nickPodium.forEach((e, i)=>{
            e.textContent = podiumTable[i].name
       });
       this.scorePodium.forEach((e, i)=>{
           e.textContent = `${podiumTable[i].score}pt`
       })

       for(let i = 3, j=1; i<10; i++, j++){
           const listItem = document.createElement('li');
           document.querySelector('.score-list').appendChild(listItem);
           listItem.classList.add('score-list__item');
           this.scoreToTen = [...document.querySelectorAll('.score-list__item')]
           this.scoreToTen[j].textContent = `${i+1}. ${podiumTable[i].name}  ${podiumTable[i].score}pt`
       }
    }
}