function hello(name){
    return(`hello ${name}`);
}

function fahr2cel (fahr){
    var cel = (fahr-32) * (5/9);
    console.log(cel);
    return cel;
}

function sqft2acre(sqft){ 
    let acre = sqft / 43560;
    console.log(`acre`);
    return acre;

}
function lawncutting( width, length, sqm){
    let area = width * length;
    let min = area / sqm;
    return min;
}

function airqualityindex(airqual){
    var results;
    if (airqual <50){
        console.log(`Your input of ${airqual} is Good`);
        return results= `Your input of ${airqual} is Good`;
    }else if (airqual >=50 && airqual <= 100){
        console.log(`Your input of ${airqual} is Moderate`);
        return results= `Your input of ${airqual} is Moderate`;
    }else if (airqual >=101 && airqual <=150){
        console.log(`Your input of ${airqual} is Unhealthy for Sensitive Groups`);
        return results= `Your input of ${airqual} is Unhealthy for Sensitive Groups`;
    }else if (airqual >=151 && airqual <=200){
        console.log(`Your input of ${airqual} is Unhealthy`);
        return results= `Your input of ${airqual} is Unhealthy`;
    }else if (airqual >= 201 && airqual <=300){
        console.log(`Your input of ${airqual} is Very Unhealthy`);
        return results= `Your input of ${airqual} is Unhealthy`;
    }else if (airqual >300){
        console.log(`Your input of ${airqual} is Hazardous`);
        return results= `Your input of ${airqual} is Hazardous`;
    }else {
        return results= "Your input is invalid please try again";
    }
    return; 
    // end of function
    }

    function yeeha (num){
        let response;

        if (num % 7 == 0  && num % 3 == 0 ){
           console.log("Yee Ha");
           return response = `Yee Ha`;
        }else if (num % 3 == 0) {
            console.log("Yee");
            return response = `Yee`;
        }else if ( num % 7 ==0){
            console.log("Ha");
            return response = `Ha`;
        }else {
            console.log("Nada");
            return response = `Nada`;
       
        }
       }

    function slopecal( x1, y1, x2, y2){

    let slp = (y2 - y1) / (x2 - x1);
    console.log(`${slp}`);
    return slp;
}
       
export {hello, fahr2cel, sqft2acre, lawncutting, airqualityindex, yeeha, slopecal}