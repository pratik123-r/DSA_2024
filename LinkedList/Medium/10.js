/**
 * find the intersection on a LL
 */

function intersection(heada, headb) {
    let a = heada;
    let b = headb;
    if(!a || !b)
        return null;

    while (a!=b) {
        a = !a ? headb : a.next;
        b = !b ? heada : b.next;
    }
    return a
}