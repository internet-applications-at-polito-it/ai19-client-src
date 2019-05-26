const { Observable } = Rx;

Observable.create(
  function subscribe(observer) {
    let cnt = 0;
    const id = setInterval(() => { let rnd = Math.random();
      if(cnt < 5 && rnd < 0.8) { 
        observer.next(Math.ceil(rnd * 10)); cnt += 1;
      } else { clearInterval(id);
        if(cnt == 5) { observer.complete('Done'); }
        else { observer.error('Oh no ...'); }
      }
    }, 1000);
});

