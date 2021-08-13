fetch('https://jsonplaceholder.typicode.com/users').then
    (response =>response.json()).then(responseJson => {
        let html='';
        for(let i=0;i<responseJson.length;i++){
            html+=`
            <div>
            <p><b>id</b>:${responseJson[i].id}</p>
            <p><span>name</span>: ${responseJson[i].name} </p>
            <p><span>username</span> :${responseJson[i].username}</p>
            <p><span>street</span>: ${responseJson[i].address.street}</p>
           <p><span>suite</span>: ${responseJson[i].address.suite}</p>
           <p><span>city</span>: ${responseJson[i].address.city}</p>
           <p><span>zipcode</span>: ${responseJson[i].address.zipcode}</p>
           <p><span>lat</span>: ${responseJson[i].address.geo.lat}</p>
           <p><span>lng</span>: ${responseJson[i].address.geo.lng}</p>
           <p><span>phone</span>: ${responseJson[i].phone}</p>
           <p><span>website</span>: ${responseJson[i].website}</p>
           <p><span>name</span>: ${responseJson[i].company.name}</p>
           <p><span>catchPhrase</span>: ${responseJson[i].company.catchPhrase}</p>
           <p><span>bs</span>: ${responseJson[i].company.bs}</p>
            </div>`;
            document.getElementById('list').innerHTML=html;
        }
    }).catch (error=> {
    alert("HATA")
})
