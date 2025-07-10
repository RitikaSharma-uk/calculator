function calculateFunding() {
  const companyType = document.getElementById("companyType").value;
  const projectType = document.getElementById("projectType").value;
  const timeline = parseInt(document.getElementById("timeline").value);
  const cost = parseFloat(document.getElementById("cost").value);

  let funding = 0;

  // Basic funding logic
  if (companyType === "Startup") {
    funding = cost * 0.8; // 80% funding
  } else if (companyType === "SMB") {
    funding = cost * 0.6; // 60% funding
  } else {
    funding = cost * 0.5; // default
  }

  document.getElementById("result").innerHTML =
    `<h3>Estimated Funding: $${funding.toFixed(2)}</h3>`;
}
