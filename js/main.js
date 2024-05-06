// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
//****************************************************************************** */
// Creare l’array di oggetti con le informazioni fornite (in allegato zip).
let team = [
    {
    nome: "Wayne Barnett",
	ruolo: "Founder & CEO",
	img: "wayne-barnett-founder-ceo.jpg"
    },
    {
    nome: "Angela Carol",
	ruolo: "Chief Editor",
	img: "angela-caroll-chief-editor.jpg"
    },
    {
    nome: "Walter Gordon",
	ruolo: "Office Manager",
	img: "walter-gordon-office-manager.jpg"
    },
    {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    img: "angela-lopez-social-media-manager.jpg"
    },
    {
    nome: "Scott Estrada",
    ruolo: "Developer",
    img: "scott-estrada-developer.jpg"
    },
    {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    img: "barbara-ramos-graphic-designer.jpg"
    },
];

for (let i = 0; i < team.length; i++) {
    const element = team[i];
    console.log(element.nome, element.ruolo, element.img)
}
