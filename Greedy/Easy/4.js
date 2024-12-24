/**
 *  860. Lemonade Change
 * 
    Example 1:
    Input: bills = [5,5,5,10,20]
    Output: true
    Explanation: 
    From the first 3 customers, we collect three $5 bills in order.
    From the fourth customer, we collect a $10 bill and give back a $5.
    From the fifth customer, we give a $10 bill and a $5 bill.
    Since all customers got correct change, we output true.

    Example 2:
    Input: bills = [5,5,10,10,20]
    Output: false
    Explanation: 
    From the first two customers in order, we collect two $5 bills.
    For the next two customers in order, we collect a $10 bill and give back a $5 bill.
    For the last customer, we can not give the change of $15 back because we only have two $10 bills.
    Since not every customer received the correct change, the answer is false.
 */

var lemonadeChange = function (bills) {
    let ten = 0;
    let five = 0;
    let twenty = 0;

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            five++
        } else if (bills[i] === 10) {
            ten++
            if(five > 0)
                five--
            else
                return false
        } else {
            twenty++
            if((ten > 0 && five > 0) || five > 2) {
                if(ten > 0 && five > 0) {
                    ten--
                    five--
                }else if(five > 2) {
                    five -= 3
                }
            } else {
                return false
            }
        }
    }
    return true
};


console.log(lemonadeChange([5,5,10,10,20]));
