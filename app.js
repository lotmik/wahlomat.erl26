const PARTIES = [
  { id: "spd", name: "SPD" },
  { id: "gruene", name: "GRUENE" },
  { id: "linke", name: "DIE LINKE" },
  { id: "csu", name: "CSU" },
  { id: "fdp", name: "FDP" },
  { id: "fwg", name: "FWG" }
];

const THESES = [
  {
    id: "stub",
    topic: "Thema 1: Stadt-Umland-Bahn (StUB)",
    context:
      "Die Stadt-Umland-Bahn ist ein geplantes Strassenbahnnetz fuer die Region Erlangen. Nach einem Buergerentscheid 2024 ist der Bau beschlossen, jedoch wird die Finanzierung aufgrund der Haushaltskrise neu debattiert.",
    statement:
      "Das Projekt Stadt-Umland-Bahn (StUB) soll wie geplant weitergefuehrt werden.",
    positions: {
      spd: {
        stance: "ja",
        quote:
          "Mit diesem Haushaltsbeschluss sichern wir die Zukunft. Zukunftsinvestitionen wie die StUB sind das Rueckgrat fuer ein modernes Erlangen."
      },
      gruene: {
        stance: "ja",
        quote:
          "Es geht um richtig viel Geld fuer unsere Stadt. Der Haushaltsbeschluss sichert Zukunftsinvestitionen."
      },
      linke: {
        stance: "ja",
        quote:
          "Wo moeglich, sollten Autos durch Rad und oeffentlichen Verkehr ersetzt werden. Wir fordern den Ausbau von Radwegen, die Reaktivierung der Aurachtalbahn und die StUB."
      },
      csu: {
        stance: "nein",
        quote:
          "Angesichts der angespannten finanziellen Lage ist ein Moratorium fuer die Stadt-Umland-Bahn unerlaesslich. Vor weiteren Verpflichtungen braucht es eine ehrliche Neubewertung der Kosten."
      },
      fdp: {
        stance: "nein",
        quote:
          "Erlangen, das Klima und die StUB: Wege in die Haushaltskrise. Die StUB ist Teil dieser Krise."
      },
      fwg: {
        stance: "nein",
        quote:
          "Haushalt 2026: Schoenrechnen statt Verantwortung. Ein Defizit von ueber 26 Millionen Euro verbietet solche Grossprojekte."
      }
    }
  },
  {
    id: "gewerbesteuer",
    topic: "Thema 2: Gewerbesteuer",
    context:
      "Erlangen leidet unter massiven Gewerbesteuereinbruechen. Die Stadtverwaltung sucht Wege, das Defizit im Haushalt auszugleichen.",
    statement: "Die Gewerbesteuer soll erhoeht werden.",
    positions: {
      linke: {
        stance: "ja",
        quote:
          "Als schnell umsetzbare Loesung fuer die finanziellen Schwierigkeiten schlagen wir eine Anhebung der Gewerbesteuer auf Muenchener Niveau vor."
      },
      spd: {
        stance: "nein",
        quote:
          "Wir wollen die Wirtschaft staerken, statt sie durch hoehere Steuern zu belasten. Der Fokus liegt auf der Schliessung von Steuerschlupfloechern."
      },
      gruene: {
        stance: "nein",
        quote:
          "Gruene uebernehmen Verantwortung fuer Erlangen. Es geht darum, Erlangen handlungsfaehig zu halten, etwa durch Bedarfszuweisungen, nicht durch Steuererhoehungen."
      },
      csu: {
        stance: "nein",
        quote:
          "Wir lehnen jegliche Steuererhoehungen ab und setzen uns fuer einen neuen Gewerbesteuersatz mit sukzessiver Senkung ein."
      },
      fdp: {
        stance: "nein",
        quote:
          "Erlangen braucht Wege aus der Haushaltskrise durch Einsparungen, nicht durch Belastungen fuer die Wirtschaft."
      },
      fwg: {
        stance: "nein",
        quote:
          "Haushalt 2026: Schoenrechnen statt Verantwortung. Mehrbelastungen fuer Buerger und Betriebe lehnen wir ab."
      }
    }
  },
  {
    id: "meldestelle-mietwucher",
    topic: "Thema 3: Meldestelle gegen Mietwucher",
    context:
      "Aufgrund der Wohnungsnot in Erlangen werden teilweise Mieten weit oberhalb des Mietspiegels verlangt.",
    statement:
      "Die Stadt Erlangen soll eine offizielle Meldestelle einrichten, an die Buerger illegal hohe Mieten melden koennen.",
    positions: {
      linke: {
        stance: "ja",
        quote:
          "Die Stadt geht gegen illegal hohe Mieten (Mietwucher) vor. Dazu richtet sie eine Meldestelle ein und leitet bei Verdacht an die Staatsanwaltschaft weiter."
      },
      spd: {
        stance: "nein",
        quote:
          "Sozialdemokratische Politik orientiert sich an den Beduerfnissen. Fokus liegt auf Neubau durch die GEWOBAU, nicht auf staatlicher Kontrolle."
      },
      gruene: {
        stance: "nein",
        quote:
          "Nachverdichtung nur mit Qualitaet. Keine Forderung nach einer zusaetzlichen Kontrollbehoerde im Programm."
      },
      csu: {
        stance: "nein",
        quote:
          "Baustandards muessen auf Sinnhaftigkeit und Kosten geprueft werden. Deregulierung und Entbuerokratisierung statt neuer Aemter."
      },
      fdp: {
        stance: "nein",
        quote:
          "Erlangen braucht mehr Freiheit fuer den Wohnungsbau. Marktwirtschaftliche Loesungen statt Meldestellen."
      },
      fwg: {
        stance: "nein",
        quote:
          "Wir brauchen bezahlbaren Wohnraum durch Bauen, nicht durch neue Buerokratie."
      }
    }
  },
  {
    id: "broetchentaste",
    topic: "Thema 4: Parken in der Innenstadt (Broetchentaste)",
    context:
      "Die Broetchentaste ermoeglicht kostenloses Parken fuer einen kurzen Zeitraum (z. B. 15-30 Minuten), um den schnellen Einkauf im Einzelhandel zu foerdern.",
    statement:
      "In der Erlanger Innenstadt soll kostenloses Kurzzeitparken (Broetchentaste) eingefuehrt werden.",
    positions: {
      csu: {
        stance: "ja",
        quote: "Kostenloses Kurzzeitparken (Broetchentaste) einfuehren."
      },
      fdp: {
        stance: "ja",
        quote:
          "Wir muessen die Innenstadt fuer alle Verkehrsmittel erreichbar halten. Dazu gehoert die Erleichterung des Parkens fuer Kundinnen und Kunden."
      },
      fwg: {
        stance: "ja",
        quote:
          "Staerkung des Einzelhandels durch Erreichbarkeit. Parken darf kein Luxusgut sein."
      },
      spd: {
        stance: "nein",
        quote:
          "Erlangen soll eine Stadt fuer Menschen sein, nicht fuer Autos. Prioritaet hat der Ausbau von Fuss- und Radwegen."
      },
      gruene: {
        stance: "nein",
        quote:
          "Autos durch Rad und oeffentlichen Verkehr ersetzen. Wo moeglich, sollten Parkflaechen entsiegelt werden."
      },
      linke: {
        stance: "nein",
        quote:
          "Wir fordern eine Fussgaengerzone bis zum Martin-Luther-Platz. Kostenloses Parken widerspricht der autofreien Stadt."
      }
    }
  },
  {
    id: "kuerzung-freiwillige-leistungen",
    topic: "Thema 5: Kuerzung freiwilliger Leistungen",
    context:
      "Freiwillige Leistungen sind Zuschuesse an Vereine, Kultur- und Sozialeinrichtungen, zu denen die Stadt gesetzlich nicht verpflichtet ist.",
    statement:
      "Angesichts der Haushaltskrise muessen die staedtischen Zuschuesse fuer Kultur, Sport und soziale Vereine gekuerzt werden.",
    positions: {
      fwg: {
        stance: "ja",
        quote:
          "Haushalt 2026: Schoenrechnen statt Verantwortung. Konsolidierung muss bei allen nicht zwingend notwendigen Ausgaben ansetzen."
      },
      fdp: {
        stance: "ja",
        quote:
          "Erlangen muss wieder lernen, mit dem Geld auszukommen, das es hat. Priorisierung der Pflichtaufgaben ist unumgaenglich."
      },
      csu: {
        stance: "nein",
        quote:
          "Kultur ist mehr als nur freiwillige Leistung. Es muessen alle Anstrengungen unternommen werden, bestehende Strukturen zu erhalten."
      },
      spd: {
        stance: "nein",
        quote:
          "Haushalt 2026 ist beschlossen - Poetinnenfest 2026 gerettet. Wir lassen unsere Vereine nicht im Stich."
      },
      gruene: {
        stance: "nein",
        quote:
          "Fuer Vereine und soziale Einrichtungen geht es nicht um Luxus, sondern um das taegliche Ueberleben. Das darf die Stadt nicht zulassen."
      },
      linke: {
        stance: "nein",
        quote:
          "Die Haushaltskrise droht vor allem im Kulturbereich zu einem Kahlschlag zu fuehren. Fuer den Erhalt von Stadtteilzentren muss die Stadt genug Geld in die Hand nehmen."
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
  return "Uebersprungen";
}

function labelForPartyStance(stance) {
  return stance === "ja" ? "Ja" : "Nein";
}

function showResults() {
  els.quiz.classList.add("hidden");
  els.results.classList.remove("hidden");

  const ranking = computeScores();
  const anyAnswered = state.answers.some((a) => a && a !== "skip");

  if (!anyAnswered) {
    els.ranking.innerHTML =
      "<p>Du hast keine These beantwortet. Starte neu und waehle mindestens eine These.</p>";
  } else {
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

    const partyLines = PARTIES.map((party) => {
      const entry = thesis.positions[party.id];
      if (!entry) return "";
      return `
        <div class="party-line">
          <strong>${party.name}:</strong> ${labelForPartyStance(entry.stance)}
          <span class="party-quote">- "${entry.quote}"</span>
        </div>
      `;
    }).join("");

    return `
      <div class="detail-card">
        <p class="detail-title"><strong>${thesis.topic}</strong></p>
        <p class="party-line"><span class="pill">Deine Antwort: ${userAnswer}</span> <span class="pill">Doppelt gewichtet: ${weighted}</span></p>
        <div class="party-lines">${partyLines}</div>
      </div>
    `;
  }).join("");
}

setup();
