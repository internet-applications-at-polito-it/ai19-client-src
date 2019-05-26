import { Observable, Subject } from 'rxjs';

/**** Observable unicast ****/

const observable = Observable.create((observer) => {
  observer.next(Math.random());
});

// subscription 1
observable.subscribe((data) => {
  console.log(data); // 0.24957144215097515 (random number)
});

// subscription 2
observable.subscribe((data) => {
  console.log(data); // 0.004617340049055896 (random number)
});


/**** Subject multicast ****/

const subject = new Subject();

const subjectObs = subject.asObservable();

// subscriber 1
subjectObs.subscribe((data) => {
  console.log(data); // 0.24957144215097515 (random number)
});

// subscriber 2
subjectObs.subscribe((data) => {
  console.log(data); // 0.24957144215097515 (random number)
});

/* a) Emit from the subject itself */
subject.next(Math.random());

/* b) Emit (multicast) values coming from another observable (unicast) */
// observable.subscribe(subject);


