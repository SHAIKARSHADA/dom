async function calculatePRI() {
  const p = document.getElementById("principal").value;
  const r = document.getElementById("rate").value;
  const t = document.getElementById("time").value;


  const res = await fetch("https://sum-server.100xdevs.com/interest?principal="+p+"&rate="+r+"&time="+t);
  console.log(res);
  const ans = await res.json();
  document.getElementById("finalSum").innerText= "Total: "+ ans.total;
  document.getElementById("finalSum2").innerText= "Interest: "+ ans.interest;
  
}