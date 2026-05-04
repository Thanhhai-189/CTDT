(async () => {
  const { initializeApp } = await import("https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js");
  const { getFirestore, collectionGroup, getDocs } =
    await import("https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js");

  const app = initializeApp({
    apiKey: "AIzaSyBen_GxaeXrll6FSRiegH-Lh1ZXY_a9jrM",
            authDomain: "ctdt-sqkt.firebaseapp.com",
            projectId: "ctdt-sqkt",
  });

  const db = getFirestore(app);

  const snapshot = await getDocs(collectionGroup(db, "syllabi"));

  console.log("Số doc:", snapshot.size);

  const data = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  console.log(JSON.stringify(data, null, 2));
})();