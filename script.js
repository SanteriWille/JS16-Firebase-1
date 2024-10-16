
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDs3YAC2yYgkgTmcSUOAo_ljZNVgk4H_Ic",
      authDomain: "js16-firebase-1.firebaseapp.com",
      projectId: "js16-firebase-1",
      storageBucket: "js16-firebase-1.appspot.com",
      messagingSenderId: "947448939453",
      appId: "1:947448939453:web:baabba853e95f3202688d4"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    import {getDatabase, ref, get, set, child, update, remove}
    from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

    const db = getDatabase();

    //----------------------References------------------------//
    var namebox = document.getElementById("nameBox");  
    var rollbox = document.getElementById("rollBox");  
    var secbox = document.getElementById("secBox");  
    var genbox = document.getElementById("genBox");
    
    var insBtn = document.getElementById("insBtn");
    var selBtn = document.getElementById("selBtn");
    var updBtn = document.getElementById("updBtn");
    var delBtn = document.getElementById("delBtn");

    //-------------------Insert Data Function------------------//
    function insertData() {
      set(ref(db, "TheStudents/"+ rollbox.value),{
        NameOfStd: namebox.value,
        RollNo: rollbox.value,
        Section: secbox.value,
        Gender: genbox.value
      })
      .then(()=>{
        alert("Data stored succesfully")
      })
      .catch((error)=>{
        alert("Unsuccesful, error"+error)
      });
    }

    //-------------------Select Data Function-------------------//
    function selectData() {
      const dbref = ref(db);

      get(child(dbref,"TheStudents/"+ rollbox.value)).then((snapshot)=>{
        if(snapshot.exists()){
          namebox.value = snapshot.val().NameOfStd;
          secbox.value = snapshot.val().Section;
          genbox.value = snapshot.val().Gender;
        }
        else {
          alert("No data found")
        }
      })
      .catch((error)=>{
        alert("Unsuccesful, error"+error)
      });
    }

    //-------------------Update Data Function-------------------//
    function updateData() {
      update(ref(db, "TheStudents/"+ rollbox.value),{
        NameOfStd: namebox.value,
        Section: secbox.value,
        Gender: genbox.value
      })
      .then(()=>{
        alert("Data updated succesfully")
      })
      .catch((error)=>{
        alert("Unsuccesful, error"+error)
      });
    }

    //-------------------Delete Data Function-------------------//
    function deleteData() {
      remove(ref(db, "TheStudents/"+ rollbox.value))
      .then(()=>{
        alert("Data removed succesfully")
      })
      .catch((error)=>{
        alert("Unsuccesful, error"+error)
      });
    }

    //-------------------Asign Events To Btns------------------//
    insBtn.addEventListener("click", insertData);
    selBtn.addEventListener("click", selectData);
    updBtn.addEventListener("click", updateData);
    delBtn.addEventListener("click", deleteData);