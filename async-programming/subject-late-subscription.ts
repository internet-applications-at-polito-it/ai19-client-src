import { Observable, Subject } from 'rxjs';

console.log('subject creation');
const subject = new Subject();

const subjectObs = subject.asObservable();

// early subscriber receives all values emitted
subjectObs.subscribe((data) => console.log('early sub: ' + data));

subject.next(1);
subject.next(2);

setTimeout( () => { 
  console.log('setTimeout function execution');
  // late subscriber does not receive previously emitted values
  subjectObs.subscribe((data) => console.log('late sub: ' + data));
  subject.next(3);
}, 3000);



