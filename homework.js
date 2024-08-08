    //  Question 1

    function squareArrayElements(arr) {
        arr.forEach(element => {
            console.log(element * element );
        });
    }
     let numbers = [1, 2, 3, 4, 5];
     
     squareArrayElements(numbers);




     // Q2
     function printEvenNumbers(arr) {
        arr.forEach(element => {
            if (element % 2 === 0 ){
                console.log(element);
            }
        });
            
        }

     let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
     printEvenNumbers(numb);