"use strict";

document.addEventListener("DOMContentLoaded", () => {
    console.log("TECH-X website loaded!");

    const demo = document.querySelector("#tool-demo");
    const buttons = document.querySelectorAll("#ai-tools [data-tool]");

    if (!demo) return;

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            const tool = button.dataset.tool;

            if (tool === "chat") {
                demo.innerHTML = `
                    <h3>🤖 TECH X AI Chat</h3>
                    <p>Ask a question to try the TECH X AI demo.</p>

                    <form id="chat-form" class="demo-form">
                        <input
                            id="chat-input"
                            class="demo-input"
                            type="text"
                            placeholder="Ask something about AI..."
                            required
                        >

                        <button class="btn" type="submit">
                            Ask AI
                        </button>
                    </form>

                    <div id="chat-output" class="demo-output">
                        Your AI response will appear here.
                    </div>
                `;

                document
                    .querySelector("#chat-form")
                    .addEventListener("submit", (event) => {
                        event.preventDefault();

                        const question =
                            document.querySelector("#chat-input").value
                            .trim()
                            .toLowerCase();

                        const output =
                            document.querySelector("#chat-output");

                        if (
                            question.includes("machine learning")
                        ) {
                            output.textContent =
                                "Machine learning allows computers to learn patterns from data and use those patterns to make predictions or decisions.";
                        } else if (
                            question.includes("artificial intelligence") ||
                            question === "what is ai" ||
                            question.includes("what is ai")
                        ) {
                            output.textContent =
                                "Artificial Intelligence is technology that enables computers to perform tasks that normally require human-like intelligence.";
                        } else if (
                            question.includes("tech x")
                        ) {
                            output.textContent =
                                "TECH X is an AI and Machine Learning platform focused on intelligent tools, innovative projects and future technology.";
                        } else {
                            output.textContent =
                                "Great question! This is the TECH X browser-based AI demo. A future version can connect this interface to a real AI model.";
                        }
                    });
            }

            if (tool === "prediction") {
                demo.innerHTML = `
                    <h3>📊 ML Prediction</h3>

                    <p>
                        Enter a score from 0 to 100 and run
                        the prediction demo.
                    </p>

                    <form id="prediction-form" class="demo-form">
                        <input
                            id="score-input"
                            class="demo-input"
                            type="number"
                            min="0"
                            max="100"
                            placeholder="Enter score"
                            required
                        >

                        <button class="btn" type="submit">
                            Predict
                        </button>
                    </form>

                    <div id="prediction-output" class="demo-output">
                        Your prediction will appear here.
                    </div>
                `;

                document
                    .querySelector("#prediction-form")
                    .addEventListener("submit", (event) => {
                        event.preventDefault();

                        const score = Number(
                            document.querySelector("#score-input").value
                        );

                        const output =
                            document.querySelector("#prediction-output");

                        if (score >= 80) {
                            output.textContent =
                                "Prediction: High performance 🚀";
                        } else if (score >= 50) {
                            output.textContent =
                                "Prediction: Moderate performance 📈";
                        } else {
                            output.textContent =
                                "Prediction: More practice recommended 💪";
                        }
                    });
            }

            if (tool === "experiment") {
                demo.innerHTML = `
                    <h3>🧠 AI Experiment</h3>

                    <p>
                        Run a simple pattern-recognition experiment.
                    </p>

                    <button
                        id="experiment-run"
                        class="btn"
                        type="button"
                    >
                        Run Experiment
                    </button>

                    <div id="experiment-output" class="demo-output">
                        Waiting for experiment...
                    </div>
                `;

                document
                    .querySelector("#experiment-run")
                    .addEventListener("click", () => {
                        const results = [
                            "Pattern detected: repeated data can reveal useful relationships.",
                            "Pattern detected: AI systems can learn from examples.",
                            "Experiment complete: the system identified a meaningful pattern."
                        ];

                        const result =
                            results[
                                Math.floor(
                                    Math.random() * results.length
                                )
                            ];

                        document.querySelector(
                            "#experiment-output"
                        ).textContent = result;
                    });
            }
        });
    });
});
    