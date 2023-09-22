/*                           EXERCICE CLASS
 * Creer une class pokemon avec parametre name,attack,defense,hp,luck une methode isLucky et une methode attckPokemon
 * Creer deux instance de pokemon avec des stats differentes
 * tant que l un deux n est pas mort 
 * le premier attaue le second (isLucky + attackPokemon)
 * afficher la vie et les degats endommagés du second
 * si le second est mort arreter la boucle 
 * le second attaque le premier (isLucky + attackPokemon)
 * afficher la vie et les degats endommagés du premier
 * si le premier est mort arreter la boucle
 * afficher une message de fin pour le pokemon perdant
 * Formule
 * degat =att de l'attaquant - def du defenseur
 * la luck correspon a la probabilite de touche l'adversaire (precision en pourcentage)
 * generer un nombre aleatoire avec math.random()
 * Si le nombre est inferieur a luck du pokemon alors le pokemon peut attaquer 
 */

// Création de la mécanique
class Pokemon{  // Création de la classse Pokemon
    constructor(name,attack,defense,hp,luck){ // Definition des paramètres du constructeur
        this.name=name  //Liaison des paramètres avec leur fonction
        this.attack=attack
        this.defense=defense
        this.hp=hp
        this.luck=luck
    }
    attackPokemon(pokemon){  // Création de la méthode
        if(this.isLucky()){ // Vérifie la probabilité de toucher l'adversaire
            let attaque=this.attack-pokemon.defense  // Défini les dommages infligés
            pokemon.hp-=attaque // Retire les dommages de la vie du pokémon
            console.log(`${this.name} a attaqué ${pokemon.name} pour ${attaque} de dégats. Il lui reste donc ${pokemon.hp} points de vie !`);
        }else{
            console.log(`${this.name} a raté son attaque !`);
        }
    }
    isLucky(){
        return this.luck>Math.random() // Roll la chance du pokémon
    }
}

// Combat
let dracofeu=new Pokemon('Dracofeu',14,8,100,0.5); // Défini Dracofeu une branche de la classe avec pour nom Dracofeu, hp, attaque, etc...
let boulbi=new Pokemon('Boulbi',18,4,70,0.8);

while(dracofeu.hp >0 && boulbi.hp>0){  // Tant qu'ils ne sont pas morts
    dracofeu.attackPokemon(boulbi)  // Attaques
    if(boulbi.hp<=0){
        console.log(boulbi.name+" est mort !");
        break;
    }
    boulbi.attackPokemon(dracofeu)
    if(dracofeu.hp<=0){
        console.log(dracofeu.name+" est mort !");
        break;
    }
}