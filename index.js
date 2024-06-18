
async function calculatePRI() {
  const a = document.getElementById("one").value;
  const b = document.getElementById("two").value;
  const element = document.getElementById("finalSum")
  const res = await fetch("https://sum-server.100xdevs.com/sum?a="+a+"&b="+b); 
  const ans = await res.text();
  document.getElementById("finalSum").innerHTML = ans;
}

