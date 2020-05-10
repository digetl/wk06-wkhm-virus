document.addEventListener('DOMContentLoaded', () => {

    console.log('JavaScript loaded');

    const virusList = document.querySelector('ul');
    const form = document.querySelector('#add-virus-form');

    form.addEventListener('submit', () => {
    event.preventDefault();

    const newVirusItem = document.createElement('li')

    const newVirus = document.createElement('li')
    const name = document.createElement('p')
    name.textContent = `Virus name: ${event.target.virusname.value}`

    const lethality = document.createElement('p')
    lethality.textContent = `Virus lethality: ${event.target.viruslethality.value}`

    const symptoms = document.createElement('p')
    symptoms.textContent = `Virus symptoms: ${event.target.virussymptoms.value}`

    const infectivity = document.createElement('p')
    infectivity.textContent = `Virus infectivity: ${event.target.virusinfectivity.value}`

    const transmisson = document.createElement('p')
    transmisson.textContent = `Virus transmisson: ${event.target.virustransmisson.value}`

    newVirus.appendChild(name);
    newVirus.appendChild(lethality);
    newVirus.appendChild(symptoms);
    newVirus.appendChild(infectivity);
    newVirus.appendChild(transmisson);
    virusList.appendChild(newVirus);
    });

  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', () => {virusList.textContent = ''})

});