async function calculateSum() {
  const p = document.getElementById("principal").value;
  const r = document.getElementById("rate").value;
  const t = document.getElementById("time").value;


  const res = await fetch("https://sum-server.100xdevs.com/interest?pricinpal="+p+"&rate="+r+"&time="+t);
  const ans = res.text();

  document.getElementById("finalSum").innerHTML = ans;
  
}