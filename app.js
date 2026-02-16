const PARTIES = [
  { id: "spd", name: "SPD" },
  { id: "grüne", name: "GRÜNE" },
  { id: "linke", name: "DIE LINKE" },
  { id: "csu", name: "CSU" },
  { id: "fdp", name: "FDP" },
  { id: "freie-wähler", name: "Freie Wähler" }
];

const THESES = [
  {
    id: "stub",
    topic: "StUB",
    context:
      "Die Stadt-Umland-Bahn ist ein geplantes Straßenbahnnetz für die Region Erlangen. Nach einem Bürgerentscheid 2024 ist der Bau beschlossen, jedoch wird die Finanzierung aufgrund der Haushaltskrise neu debattiert.",
    statement:
      "Das Projekt Stadt-Umland-Bahn (StUB) soll wie geplant weitergeführt werden",
    positions: {
      spd: {
        stance: "ja",
        quote:
          "Mit diesem Haushaltsbeschluss sichern wir die Zukunft. Zukunftsinvestitionen wie die StUB sind das Rückgrat für ein modernes Erlangen."
      },
      "grüne": {
        stance: "ja",
        quote:
          "Es geht um richtig viel Geld für unsere Stadt. Der Haushaltsbeschluss sichert Zukunftsinvestitionen."
      },
      linke: {
        stance: "ja",
        quote:
          "Wo möglich, sollten Autos durch Rad und öffentlichen Verkehr ersetzt werden. Wir fordern den Ausbau von Radwegen, die Reaktivierung der Aurachtalbahn und die StUB."
      },
      csu: {
        stance: "nein",
        quote:
          "Angesichts der angespannten finanziellen Lage ist ein Moratorium für die Stadt-Umland-Bahn unerlässlich. Vor weiteren Verpflichtungen braucht es eine ehrliche Neubewertung der Kosten."
      },
      fdp: {
        stance: "nein",
        quote:
          "Erlangen, das Klima und die StUB: Wege in die Haushaltskrise. Die StUB ist Teil dieser Krise."
      },
      "freie-wähler": {
        stance: "nein",
        quote:
          "Haushalt 2026: Schönrechnen statt Verantwortung. Ein Defizit von über 26 Millionen Euro verbietet solche Großprojekte."
      }
    }
  },
  {
    id: "gewerbesteuer",
    topic: "Gewerbesteuer",
    context:
      "Erlangen leidet unter massiven Gewerbesteuereinbrüchen. Die Stadtverwaltung sucht Wege, das Defizit im Haushalt auszugleichen.",
    statement: "Die Gewerbesteuer soll erhöht werden",
    positions: {
      linke: {
        stance: "ja",
        quote:
          "Als schnell umsetzbare Lösung für die finanziellen Schwierigkeiten schlagen wir eine Anhebung der Gewerbesteuer auf Münchener Niveau vor."
      },
      spd: {
        stance: "nein",
        quote:
          "Wir wollen die Wirtschaft stärken, statt sie durch höhere Steuern zu belasten. Der Fokus liegt auf der Schließung von Steuerschlupflöchern."
      },
      "grüne": {
        stance: "nein",
        quote:
          "Grüne übernehmen Verantwortung für Erlangen. Es geht darum, Erlangen handlungsfähig zu halten, etwa durch Bedarfszuweisungen, nicht durch Steuererhöhungen."
      },
      csu: {
        stance: "nein",
        quote:
          "Wir lehnen jegliche Steuererhöhungen ab und setzen uns für einen neuen Gewerbesteuersatz mit sukzessiver Senkung ein."
      },
      fdp: {
        stance: "nein",
        quote:
          "Erlangen braucht Wege aus der Haushaltskrise durch Einsparungen, nicht durch Belastungen für die Wirtschaft."
      },
      "freie-wähler": {
        stance: "nein",
        quote:
          "Haushalt 2026: Schönrechnen statt Verantwortung. Mehrbelastungen für Bürger und Betriebe lehnen wir ab."
      }
    }
  },
  {
    id: "meldestelle-mietwucher",
    topic: "Meldestelle",
    context:
      "Aufgrund der Wohnungsnot in Erlangen werden teilweise Mieten weit oberhalb des Mietspiegels verlangt.",
    statement:
      "Die Stadt Erlangen soll eine offizielle Meldestelle einrichten, an die Bürger illegal hohe Mieten melden können",
    positions: {
      linke: {
        stance: "ja",
        quote:
          "Die Stadt geht gegen illegal hohe Mieten (Mietwucher) vor. Dazu richtet sie eine Meldestelle ein und leitet bei Verdacht an die Staatsanwaltschaft weiter."
      },
      spd: {
        stance: "nein",
        quote:
          "Sozialdemokratische Politik orientiert sich an den Bedürfnissen. Fokus liegt auf Neubau durch die GEWOBAU, nicht auf staatlicher Kontrolle."
      },
      "grüne": {
        stance: "nein",
        quote:
          "Nachverdichtung nur mit Qualität. Keine Forderung nach einer zusätzlichen Kontrollbehörde im Programm."
      },
      csu: {
        stance: "nein",
        quote:
          "Baustandards müssen auf Sinnhaftigkeit und Kosten geprüft werden. Deregulierung und Entbürokratisierung statt neuer Ämter."
      },
      fdp: {
        stance: "nein",
        quote:
          "Erlangen braucht mehr Freiheit für den Wohnungsbau. Marktwirtschaftliche Lösungen statt Meldestellen."
      },
      "freie-wähler": {
        stance: "nein",
        quote:
          "Wir brauchen bezahlbaren Wohnraum durch Bauen, nicht durch neue Bürokratie."
      }
    }
  },
  {
    id: "brötchentaste",
    topic: "Brötchentaste",
    context:
      "Die Brötchentaste ermöglicht kostenloses Parken für einen kurzen Zeitraum (z. B. 15-30 Minuten), um den schnellen Einkauf im Einzelhandel zu fördern.",
    statement:
      "In der Erlanger Innenstadt soll kostenloses Kurzzeitparken eingeführt werden",
    positions: {
      csu: {
        stance: "ja",
        quote: "Kostenloses Kurzzeitparken (Brötchentaste) einführen."
      },
      fdp: {
        stance: "ja",
        quote:
          "Wir müssen die Innenstadt für alle Verkehrsmittel erreichbar halten. Dazu gehört die Erleichterung des Parkens für Kundinnen und Kunden."
      },
      "freie-wähler": {
        stance: "ja",
        quote:
          "Stärkung des Einzelhandels durch Erreichbarkeit. Parken darf kein Luxusgut sein."
      },
      spd: {
        stance: "nein",
        quote:
          "Erlangen soll eine Stadt für Menschen sein, nicht für Autos. Priorität hat der Ausbau von Fuß- und Radwegen."
      },
      "grüne": {
        stance: "nein",
        quote:
          "Autos durch Rad und öffentlichen Verkehr ersetzen. Wo möglich, sollten Parkflächen entsiegelt werden."
      },
      linke: {
        stance: "nein",
        quote:
          "Wir fordern eine Fußgängerzone bis zum Martin-Luther-Platz. Kostenloses Parken widerspricht der autofreien Stadt."
      }
    }
  },
  {
    id: "kürzung-freiwillige-leistungen",
    topic: "Freiwillige Zuschüsse",
    context:
      "Freiwillige Leistungen sind Zuschüsse an Vereine, Kultur- und Sozialeinrichtungen, zu denen die Stadt gesetzlich nicht verpflichtet ist.",
    statement:
      "Angesichts der Haushaltskrise müssen die städtischen Zuschüsse für Kultur, Sport und soziale Vereine gekürzt werden",
    positions: {
      "freie-wähler": {
        stance: "ja",
        quote:
          "Haushalt 2026: Schönrechnen statt Verantwortung. Konsolidierung muss bei allen nicht zwingend notwendigen Ausgaben ansetzen."
      },
      fdp: {
        stance: "ja",
        quote:
          "Erlangen muss wieder lernen, mit dem Geld auszukommen, das es hat. Priorisierung der Pflichtaufgaben ist unumgänglich."
      },
      csu: {
        stance: "nein",
        quote:
          "Kultur ist mehr als nur freiwillige Leistung. Es müssen alle Anstrengungen unternommen werden, bestehende Strukturen zu erhalten."
      },
      spd: {
        stance: "nein",
        quote:
          "Haushalt 2026 ist beschlossen - Poet*innenfest 2026 gerettet. Wir lassen unsere Vereine nicht im Stich."
      },
      "grüne": {
        stance: "nein",
        quote:
          "Für Vereine und soziale Einrichtungen geht es nicht um Luxus, sondern um das tägliche Überleben. Das darf die Stadt nicht zulassen."
      },
      linke: {
        stance: "nein",
        quote:
          "Die Haushaltskrise droht vor allem im Kulturbereich zu einem Kahlschlag zu führen. Für den Erhalt von Stadtteilzentren muss die Stadt genug Geld in die Hand nehmen."
      }
    }
  }
];

const state = {
  index: 0,
  answers: Array(THESES.length).fill(null),
  weights: Array(THESES.length).fill(1)
};

const els = {
  intro: document.getElementById("intro"),
  quiz: document.getElementById("quiz"),
  results: document.getElementById("results"),
  startBtn: document.getElementById("startBtn"),
  restartBtn: document.getElementById("restartBtn"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  skipBtn: document.getElementById("skipBtn"),
  topicTag: document.getElementById("topicTag"),
  statement: document.getElementById("statement"),
  context: document.getElementById("context"),
  progressText: document.getElementById("progressText"),
  progressBar: document.getElementById("progressBar"),
  weightToggle: document.getElementById("weightToggle"),
  ranking: document.getElementById("ranking"),
  details: document.getElementById("details"),
  winnerCard: document.getElementById("winnerCard"),
  winnerParty: document.getElementById("winnerParty"),
  winnerMeta: document.getElementById("winnerMeta"),
  answeredCount: document.getElementById("answeredCount"),
  weightedCount: document.getElementById("weightedCount"),
  answerButtons: [...document.querySelectorAll(".answer-btn")]
};

function setup() {
  els.startBtn.addEventListener("click", () => {
    els.intro.classList.add("hidden");
    els.quiz.classList.remove("hidden");
    renderQuestion();
  });

  els.restartBtn.addEventListener("click", () => {
    state.index = 0;
    state.answers = Array(THESES.length).fill(null);
    state.weights = Array(THESES.length).fill(1);
    els.results.classList.add("hidden");
    els.intro.classList.remove("hidden");
    els.quiz.classList.add("hidden");
  });

  els.prevBtn.addEventListener("click", () => {
    if (state.index > 0) {
      saveWeight();
      state.index -= 1;
      renderQuestion();
    }
  });

  els.nextBtn.addEventListener("click", () => {
    saveWeight();
    if (state.index < THESES.length - 1) {
      state.index += 1;
      renderQuestion();
      return;
    }
    showResults();
  });

  els.skipBtn.addEventListener("click", () => {
    state.answers[state.index] = "skip";
    moveForward();
  });

  els.answerButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.dataset.answer;
      state.answers[state.index] = answer;
      moveForward();
    });
  });
}

function saveWeight() {
  state.weights[state.index] = els.weightToggle.checked ? 2 : 1;
}

function moveForward() {
  saveWeight();
  if (state.index < THESES.length - 1) {
    state.index += 1;
    renderQuestion();
  } else {
    showResults();
  }
}

function renderQuestion() {
  const thesis = THESES[state.index];
  const current = state.answers[state.index];

  els.topicTag.textContent = thesis.topic;
  els.statement.textContent = thesis.statement;
  els.context.textContent = thesis.context;
  els.progressText.textContent = `These ${state.index + 1} von ${THESES.length}`;
  els.progressBar.style.width = `${((state.index + 1) / THESES.length) * 100}%`;
  els.weightToggle.checked = state.weights[state.index] === 2;

  els.answerButtons.forEach((btn) => {
    const active = current === btn.dataset.answer;
    btn.classList.toggle("is-selected", active);
  });
}

function computeScores() {
  return PARTIES.map((party) => {
    let score = 0;
    let max = 0;

    THESES.forEach((thesis, idx) => {
      const answer = state.answers[idx];
      if (!answer || answer === "skip") return;

      const weight = state.weights[idx];
      const partyStance = thesis.positions[party.id]?.stance;
      max += 2 * weight;

      if (answer === "neutral") {
        score += 1 * weight;
      } else if (partyStance === answer) {
        score += 2 * weight;
      }
    });

    const percent = max > 0 ? Math.round((score / max) * 100) : 0;
    return { party: party.name, id: party.id, score, max, percent };
  }).sort((a, b) => b.percent - a.percent);
}

function labelForAnswer(answer) {
  if (answer === "ja") return "Ja";
  if (answer === "nein") return "Nein";
  if (answer === "neutral") return "Neutral";
  return "Übersprungen";
}

function labelForPartyStance(stance) {
  return stance === "ja" ? "Ja" : "Nein";
}

function showResults() {
  els.quiz.classList.add("hidden");
  els.results.classList.remove("hidden");

  const ranking = computeScores();
  const answeredCount = state.answers.filter(
    (answer) => answer && answer !== "skip"
  ).length;
  const weightedCount = state.weights.filter(
    (weight, idx) => weight === 2 && state.answers[idx] && state.answers[idx] !== "skip"
  ).length;
  const anyAnswered = state.answers.some((answer) => answer && answer !== "skip");

  if (els.answeredCount) {
    els.answeredCount.textContent = `${answeredCount}/${THESES.length}`;
  }
  if (els.weightedCount) {
    els.weightedCount.textContent = `${weightedCount}`;
  }

  if (!anyAnswered) {
    if (els.winnerParty) {
      els.winnerParty.textContent = "-";
    }
    if (els.winnerMeta) {
      els.winnerMeta.textContent =
        "Beantworte mindestens eine These, um eine Auswertung zu erhalten.";
    }
    els.ranking.innerHTML =
      "<p>Du hast keine These beantwortet. Starte neu und wähle mindestens eine These.</p>";
  } else {
    const top = ranking[0];
    const second = ranking[1];
    if (els.winnerParty) {
      els.winnerParty.textContent = `${top.party} (${top.percent}%)`;
    }
    if (second) {
      if (els.winnerMeta) {
        els.winnerMeta.textContent = `Vorsprung vor Platz 2: ${Math.max(
          0,
          top.percent - second.percent
        )} Prozentpunkte`;
      }
    } else {
      if (els.winnerMeta) {
        els.winnerMeta.textContent = "Nur eine Partei in der Auswertung verfügbar.";
      }
    }

    els.ranking.innerHTML = ranking
      .map(
        (item) => `
          <div class="rank-item">
            <div class="rank-head">
              <span class="rank-party">${item.party}</span>
              <span class="rank-score">${item.percent}%</span>
            </div>
            <div class="rank-track">
              <div class="rank-fill" style="width:${item.percent}%"></div>
            </div>
          </div>
        `
      )
      .join("");
  }

  els.details.innerHTML = THESES.map((thesis, idx) => {
    const userAnswer = labelForAnswer(state.answers[idx]);
    const weighted = state.weights[idx] === 2 ? "Ja" : "Nein";

    const quoteCards = PARTIES.map((party) => {
      const entry = thesis.positions[party.id];
      if (!entry) return "";
      return `
        <article class="quote-card">
          <header class="quote-head">
            <strong class="quote-party">${party.name}</strong>
            <span class="stance-badge stance-${entry.stance}">${labelForPartyStance(entry.stance)}</span>
          </header>
          <blockquote class="quote-text">„${entry.quote}“</blockquote>
        </article>
      `;
    }).join("");

    return `
      <details class="detail-accordion" ${idx === 0 ? "open" : ""}>
        <summary class="detail-summary">
          <span class="detail-summary-topic">${thesis.topic}</span>
          <span class="detail-pills">
            <span class="pill">Deine Antwort: ${userAnswer}</span>
            <span class="pill">Doppelt gewichtet: ${weighted}</span>
          </span>
        </summary>
        <p class="detail-statement">${thesis.statement}</p>
        <div class="quote-grid">${quoteCards}</div>
      </details>
    `;
  }).join("");
}

setup();
