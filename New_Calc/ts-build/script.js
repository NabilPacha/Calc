"use strict";
class Calculator {
    // Gestion de l'entrée utilisateur
    static input(value) {
        if (Calculator.displayElement.textContent === "0") {
            Calculator.displayElement.textContent = value.toString();
        }
        else {
            Calculator.displayElement.textContent += value.toString();
        }
    }
    // Réinitialisation de l'affichage
    static clearDisplay() {
        Calculator.displayElement.textContent = "0";
    }
    // Calcul de l'expression
    static calculate() {
        try {
            Calculator.displayElement.textContent = eval(Calculator.displayElement.textContent || "0");
        }
        catch (_a) {
            Calculator.displayElement.textContent = "Erreur";
        }
    }
    // Basculement du mode scientifique
    static toggleScientificMode() {
        Calculator.isScientificMode = !Calculator.isScientificMode;
        if (Calculator.isScientificMode) {
            Calculator.scientificButtons.classList.add("visible");
            Calculator.scientificButtons.classList.remove("hidden");
        }
        else {
            Calculator.scientificButtons.classList.add("hidden");
            Calculator.scientificButtons.classList.remove("visible");
        }
    }
    // Autres méthodes (puissance, racine, logarithme, etc.) restent inchangées
    static power() {
        Calculator.displayElement.textContent += "**";
    }
    static factorial() {
        const n = parseInt(Calculator.displayElement.textContent || "0");
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        Calculator.displayElement.textContent = result.toString();
    }
    static sqrt() {
        const value = parseFloat(Calculator.displayElement.textContent || "0");
        Calculator.displayElement.textContent = Math.sqrt(value).toString();
    }
    static convertBase(base) {
        const value = parseInt(Calculator.displayElement.textContent || "0");
        Calculator.displayElement.textContent = value.toString(base);
    }
    static exponential() {
        const value = parseFloat(Calculator.displayElement.textContent || "0");
        Calculator.displayElement.textContent = Math.exp(value).toString();
    }
    static logarithm() {
        const value = parseFloat(Calculator.displayElement.textContent || "0");
        Calculator.displayElement.textContent = Math.log(value).toString();
    }
    static trigonometry(func) {
        const angle = parseFloat(Calculator.displayElement.textContent || "0");
        Calculator.displayElement.textContent = Math[func](angle).toFixed(5);
    }
    static modulo() {
        Calculator.displayElement.textContent += "%";
    }
}
Calculator.displayElement = document.getElementById("display");
Calculator.scientificButtons = document.getElementById("scientific-buttons");
Calculator.isScientificMode = false; // Mode scientifique désactivé par défaut
// Horloge en temps réel
setInterval(() => {
    const clock = document.getElementById("clock");
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}, 1000);
