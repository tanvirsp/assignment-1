
// 1) Topic: Online Store Discount Calculator (If-Else Statement)

    function disCountCaldulator(total){
        if (total <50){
            console.log("Discount is Available on $50");
        
        } else if (total > 49 &&  total <= 100){
            const discount = (total * 5) /100;
            const discountedAmount = total - discount;
            console.log("Discounted amount & Total amount: " + discountedAmount + ", Discount amount: "  + discount  );
        
        } else if (total > 100 &&  total < 200){
            const discount = (total * 10) /100;
            const discountedAmount = total - discount;
            console.log("Discounted amount & Total amount: " + discountedAmount + ", Discount amount: "  + discount  );
        
        } else {
            const discount = (total * 15) /100;
            const discountedAmount = total - discount;
            console.log("Discounted amount & Total amount: " + discountedAmount + ", Discount amount: "  + discount  );
        }
    };

    




// 2) Topic: Filter Even Numbers

    function filterEvenNumber(arr){
        const evenArr = arr.filter( number => number % 2 == 0);
        console.log(evenArr);
    };

    




// 3) Topic: Multiplication Table Generator

    function multiplicationTable(number){
        for(let i = 1; i<=10 ; i++){
            console.log(i + "X" + number + "=" + i* number);
        };
    };






// 4) Topic: Grade Calculator (JavaScript Switch Case)

    function calculateGrade(score){

        switch (true) {
            
            case (score < 60):
                return "F";
                
            case (score > 59 && score < 70):
                return "D";

            case (score > 69 && score < 80):
                return "C";

            case (score > 79 && score < 90):
                return "B";
        
            default:
                return "A";
        }

    };

