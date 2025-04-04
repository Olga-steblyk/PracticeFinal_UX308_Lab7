import {fahr2cel, hello} from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2(){
    return <section>
2. Write a function that converts from fahrenheit to celcius
<h2>Results</h2>
<p> fahrenheit2celcius(32) == "{fahr2cel(32)}"</p>
<p> fahrenheit2celcius(70) == "{fahr2cel(70)}"</p>
<p> fahrenheit2celcius(212) == "{fahr2cel(212)}"</p>
    </section>;
}

export {Question1, Question2}
