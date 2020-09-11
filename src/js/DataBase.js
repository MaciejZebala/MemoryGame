import * as firebase from 'firebase/app'

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
    
        this.nickName = document.getElementById('nickname');
    }


    showNickName(){

        if(!this.firebase.apps.length){
            this.firebase.initializeApp(this.firebaseConfig)
        }
    
        const dataBase = this.firebase.database();

        const ref = dataBase.ref('scores');

        this.data = {
            name: `${this.nickName.value}`,
            score: (this.totalClick * (this.timeRemainig-1))
        }

        ref.push(this.data)
    }
}