
const shit = (function (){
    let a = 0;
    return ()=>{
        a++;
        return a;
    }

})();

function increase()
{
    document.getElementById("counterValue").innerHTML = shit();
}
function addHello()
{
    const a = document.createElement("p");
    const node = document.createTextNode("labas baltalietuvi iš javacript");
    a.appendChild(node);
    document.body.appendChild(a);
}