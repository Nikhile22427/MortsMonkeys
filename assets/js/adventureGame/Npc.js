import Character from './Character.js';
import GameEnv from './GameEnv.js';
import Prompt from './Prompt.js';

class Npc extends Character {
    constructor(data = null) {
        super(data);
        this.quiz = data?.quiz?.title; // Quiz title
        this.questions = Prompt.shuffleArray(data?.quiz?.questions || []); // Shuffle questions
        this.currentQuestionIndex = 0; // Start from the first question
        this.alertTimeout = null;
        this.image = new Image(); // Create an image element
        this.image.src = data?.image || ''; // Set image source (passed through constructor)
        this.voiceLines = data?.voiceLines || []; // Add voice lines (passed through constructor)
        this.spriteData = data?.spriteData || {}; // Get sprite data for NPC positioning
        this.bindEventListeners(); // Bind interaction listeners
    }

    /**
     * Override the update method to draw the NPC with an image.
     */
    update() {
        this.draw();
    }

    /**
     * Bind key event listeners for proximity interaction.
     */
    bindEventListeners() {
        addEventListener('keydown', this.handleKeyDown.bind(this));
        addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    /**
     * Handle keydown events for interaction with the NPC.
     */
    handleKeyDown({ key }) {
        switch (key) {
            case 'e': // Player 1 interaction
            case 'u': // Player 2 interaction
                this.shareQuizQuestion(); // Show quiz if NPC has one
                this.playVoiceLine(); // Play a random voice line
                break;
        }
    }

    /**
     * Handle keyup events to stop player actions.
     */
    handleKeyUp({ key }) {
        if (key === 'e' || key === 'u') {
            if (this.alertTimeout) {
                clearTimeout(this.alertTimeout); // Clear any previous interaction alert
                this.alertTimeout = null;
            }
        }
    }

    /**
     * Draw the NPC image to the screen.
     */
    draw() {
        if (this.image && this.spriteData) {
            const { x, y, width, height } = this.spriteData;
            // Assuming 'context' is your drawing context (e.g., from a canvas)
            context.drawImage(this.image, x, y, width, height); // Draw NPC image at specified position
        }
    }

    /**
     * Get the next question in the shuffled array.
     */
    getNextQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        this.currentQuestionIndex = (this.currentQuestionIndex + 1) % this.questions.length; // Loop through questions
        return question;
    }

    /**
     * Share quiz question when interacting with NPC.
     */
    shareQuizQuestion() {
        const players = GameEnv.gameObjects.filter(obj => obj.state.collisionEvents.includes(this.spriteData.id));
        if (players.length > 0 && this.questions.length > 0) {
            players.forEach(player => {
                if (!Prompt.isOpen) {
                    Prompt.currentNpc = this;
                    Prompt.openPromptPanel(this); // Open the quiz prompt
                }
            });
        }
    }

    /**
     * Play a random voice line when the NPC is interacted with.
     */
    playVoiceLine() {
        if (this.voiceLines.length > 0) {
            const randomIndex = Math.floor(Math.random() * this.voiceLines.length);
            const voiceLine = this.voiceLines[randomIndex];
            console.log(voiceLine); // Simulate voice output (you can replace this with actual audio playback logic)
        }
    }
}

export default Npc;