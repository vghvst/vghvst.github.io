import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js"
import { getFirestore, collection, getDocs, doc, getDoc, onSnapshot, addDoc  } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBHPlPjSbuFMCH2SlWLNX7f0M9OTnyBL-4",
  authDomain: "acedb-d6652.firebaseapp.com",
  projectId: "acedb-d6652",
  storageBucket: "acedb-d6652.firebasestorage.app",
  messagingSenderId: "115025859464",
  appId: "1:115025859464:web:8a948ecf2ef00cff0ae03d",
  measurementId: "G-3393ZFVPMX"
}
    
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const coll = collection(db, "posts")

async function addPost(tVal, cVal, dVal) {
    try{
        const doc = await addDoc(coll, {
            title: tVal,
            content: cVal,
            date: dVal
        })
        console.log("Document written with ID: ", doc.id)
        console.log(db)
    }catch(e){
        console.error(e)
    }
}
async function getPosts() {
    try{
        const postsGot = await getDocs(coll)
        postsGot.forEach(post => {
            console.log(post.data())
        })
    }catch(e){
        console.error(e)
    }
}
$('.sbmtBtn').click(() => {
    if($('#titleInp').val() != "" && $('#contentInp').val() != "" && $('#pass').val() == "16082010" && $('#dateInp').val() != ""){
        addPost($('#titleInp').val(), $('#contentInp').val(), $('#dateInp').val())
        return location.href = "news.html"
    }else{
        return location.href = "index.html"
    }
})