class Calculator {
    static displayElement: HTMLElement = document.getElementById("display")!;
    static scientificButtons: HTMLElement = document.getElementById("scientific-buttons")!;
    static isScientificMode: boolean = false; // Mode scientifique désactivé par défaut

    // Gestion de l'entrée utilisateur
    static input(value: number | string): void {
        if (Calculator.displayElement.textContent === "0") {
            Calculator.displayElement.textContent = value.toString();
        } else {
            Calculator.displayElement.textContent += value.toString();
        }
    }

    // Réinitialisation de l'affichage
    static clearDisplay(): void {
        Calculator.displayElement.textContent = "0";
    }

    // Calcul de l'expression
    static calculate(): void {
        try {
            Calculator.displayElement.textContent = eval(Calculator.displayElement.textContent || "0");
        } catch {
            Calculator.displayElement.textContent = "Erreur";
        }
    }

    // Basculement du mode scientifique
    static toggleScientificMode(): void {
        Calculator.isScientificMode = !Calculator.isScientificMode;
        if (Calculator.isScientificMode) {
            Calculator.scientificButtons.classList.add("visible");
            Calculator.scientificButtons.classList.remove("hidden");
        } else {
            Calculator.scientificButtons.classList.add("hidden");
            Calculator.scientificButtons.classList.remove("visible");
        }
    }
    

    // Autres méthodes (puissance, racine, logarithme, etc.) restent inchangées
    static power(): void {
        Calculator.displayElement.textContent += "**";
    }

    static factorial(): void {
        const n = parseInt(Calculator.displayElement.textContent || "0");
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        Calculator.displayElement.textContent = result.toString();
    }

    static sqrt(): void {
        const value = parseFloat(Calculator.displayElement.textContent || "0");
        Calculator.displayElement.textContent = Math.sqrt(value).toString();
    }

    static convertBase(base: number): void {
        const value = parseInt(Calculator.displayElement.textContent || "0");
        Calculator.displayElement.textContent = value.toString(base);
    }

    static exponential(): void {
        const value = parseFloat(Calculator.displayElement.textContent || "0");
        Calculator.displayElement.textContent = Math.exp(value).toString();
    }

    static logarithm(): void {
        const value = parseFloat(Calculator.displayElement.textContent || "0");
        Calculator.displayElement.textContent = Math.log(value).toString();
    }

    static trigonometry(func: "cos" | "sin" | "tan"): void {
        const angle = parseFloat(Calculator.displayElement.textContent || "0");
        Calculator.displayElement.textContent = Math[func](angle).toFixed(5);
    }

    static modulo(): void {
        Calculator.displayElement.textContent += "%";
    }
}

// Horloge en temps réel
setInterval(() => {
    const clock = document.getElementById("clock")!;
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}, 1000);
