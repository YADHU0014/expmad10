if('serviceWorker' in navigator){
    window.addEventListener('load',function (){
        this.navigator.serviceWorker.register('/sw.js').then(function(registration){
            console.log('serviceWorker registration successful with scope: ', registration.scope);
        
        }, function (err){
            console.log('ServiceWorker registration failed:' , err);
        });
    })
}
self.addEventListener('fetch', function(event){
    event.respondWidth(
        caches.match(event.request).then(function(response){
            if(response){
                return response;
            }
            return fetch(event.request);
        })
    );
    });