/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright (C) 2026 Mermaid Studio contributors */

mermaid.registerLayoutLoaders(mermaidElkLayouts.default);

const translations = {
  en: {
    exampleLabel: "Example", copy: "Copy", copied: "Copied!",
    download: "Download .mmd", reset: "Reset", editor: "Editor", yourDiagram: "Your diagram",
    ready: "Ready", rendering: "Rendering…", upToDate: "Up to date", syntaxError: "Syntax error",
    hint: "Tip: edit the code and the preview updates automatically.", livePreview: "Live preview",
    render: "Render", svg: "SVG", png: "PNG", pdf: "PDF", diagramPreview: "Diagram preview", mermaidCode: "Mermaid code", customization: "Customization", options: "Options",
    theme: "Theme", themeDefault: "Default", themeDark: "Dark", themeForest: "Forest", themeNeutral: "Neutral",
    layout: "Layout", backgroundColor: "Background color", transparentBackground: "Transparent background",
    shortcuts: "Shortcuts", downloadCode: "Download code", refreshPreview: "Refresh preview",
    offline: "Standalone application — no network access required", footer: "Mermaid Studio · open source Mermaid engine",
    emptyDiagram: "Empty diagram", invalidSvg: "The SVG output is invalid.",
    newDiagram: "New diagram", newDiagramPrompt: "Diagram name:", defaultDiagramName: "My diagram", savedDiagrams: "Saved diagrams", deleteDiagram: "Delete diagram", confirmDeleteDiagram: "Delete this diagram?",
    examples: { workflow: "Workflow", sequence: "Sequence", classes: "Classes", gantt: "Gantt" },
  },
  fr: {
    exampleLabel: "Exemple", copy: "Copier", copied: "Copié !",
    download: "Télécharger .mmd", reset: "Réinitialiser", editor: "Éditeur", yourDiagram: "Votre diagramme",
    ready: "Prêt", rendering: "Rendu…", upToDate: "À jour", syntaxError: "Erreur de syntaxe",
    hint: "Astuce : modifiez le code et l’aperçu se met à jour automatiquement.", livePreview: "Aperçu en direct",
    render: "Rendu", svg: "SVG", png: "PNG", pdf: "PDF", diagramPreview: "Aperçu du diagramme", mermaidCode: "Code Mermaid", customization: "Personnalisation", options: "Options",
    theme: "Thème", themeDefault: "Par défaut", themeDark: "Sombre", themeForest: "Forêt", themeNeutral: "Neutre",
    layout: "Disposition", backgroundColor: "Couleur d’arrière-plan", transparentBackground: "Arrière-plan transparent",
    shortcuts: "Raccourcis", downloadCode: "Télécharger le code", refreshPreview: "Rafraîchir l’aperçu",
    offline: "Application autonome — aucun accès réseau requis", footer: "Mermaid Studio · moteur Mermaid open source",
    emptyDiagram: "Diagramme vide", invalidSvg: "Le rendu SVG est invalide.",
    newDiagram: "Nouveau diagramme", newDiagramPrompt: "Nom du diagramme :", defaultDiagramName: "Mon diagramme", savedDiagrams: "Diagrammes enregistrés", deleteDiagram: "Supprimer le diagramme", confirmDeleteDiagram: "Supprimer ce diagramme ?",
    examples: { workflow: "Flux de travail", sequence: "Séquence", classes: "Classes", gantt: "Gantt" },
  },
};

// Les traductions complémentaires héritent de l’anglais pour que l’interface
// reste complète même lorsqu’un libellé n’a pas encore de traduction dédiée.
Object.assign(translations, {
  de: { ...translations.en, exampleLabel: "Beispiel", copy: "Kopieren", copied: "Kopiert!", download: ".mmd herunterladen", reset: "Zurücksetzen", editor: "Editor", yourDiagram: "Ihr Diagramm", ready: "Bereit", rendering: "Wird gerendert…", upToDate: "Aktuell", syntaxError: "Syntaxfehler", hint: "Tipp: Bearbeiten Sie den Code – die Vorschau wird automatisch aktualisiert.", livePreview: "Live-Vorschau", render: "Darstellung", customization: "Anpassung", options: "Optionen", theme: "Design", themeDefault: "Standard", themeDark: "Dunkel", themeForest: "Wald", themeNeutral: "Neutral", layout: "Layout", backgroundColor: "Hintergrundfarbe", transparentBackground: "Transparenter Hintergrund", shortcuts: "Tastenkürzel", downloadCode: "Code herunterladen", refreshPreview: "Vorschau aktualisieren", offline: "Eigenständige Anwendung — kein Netzwerkzugriff erforderlich", footer: "Mermaid Studio · Open-Source-Mermaid-Engine", emptyDiagram: "Leeres Diagramm", newDiagram: "Neues Diagramm", newDiagramPrompt: "Diagrammname:", defaultDiagramName: "Mein Diagramm", savedDiagrams: "Gespeicherte Diagramme", examples: { workflow: "Arbeitsablauf", sequence: "Sequenz", classes: "Klassen", gantt: "Gantt" } },
  es: { ...translations.en, exampleLabel: "Ejemplo", copy: "Copiar", copied: "¡Copiado!", download: "Descargar .mmd", reset: "Restablecer", editor: "Editor", yourDiagram: "Tu diagrama", ready: "Listo", rendering: "Renderizando…", upToDate: "Actualizado", syntaxError: "Error de sintaxis", hint: "Consejo: edita el código y la vista previa se actualizará automáticamente.", livePreview: "Vista previa en directo", render: "Resultado", customization: "Personalización", options: "Opciones", theme: "Tema", themeDefault: "Predeterminado", themeDark: "Oscuro", themeForest: "Bosque", themeNeutral: "Neutro", layout: "Diseño", backgroundColor: "Color de fondo", transparentBackground: "Fondo transparente", shortcuts: "Atajos", downloadCode: "Descargar código", refreshPreview: "Actualizar vista previa", offline: "Aplicación independiente — no requiere acceso a la red", footer: "Mermaid Studio · motor Mermaid de código abierto", emptyDiagram: "Diagrama vacío", newDiagram: "Nuevo diagrama", newDiagramPrompt: "Nombre del diagrama:", defaultDiagramName: "Mi diagrama", savedDiagrams: "Diagramas guardados", examples: { workflow: "Flujo de trabajo", sequence: "Secuencia", classes: "Clases", gantt: "Gantt" } },
  it: { ...translations.en, exampleLabel: "Esempio", copy: "Copia", copied: "Copiato!", download: "Scarica .mmd", reset: "Reimposta", editor: "Editor", yourDiagram: "Il tuo diagramma", ready: "Pronto", rendering: "Rendering…", upToDate: "Aggiornato", syntaxError: "Errore di sintassi", hint: "Suggerimento: modifica il codice e l’anteprima si aggiornerà automaticamente.", livePreview: "Anteprima in tempo reale", render: "Risultato", customization: "Personalizzazione", options: "Opzioni", theme: "Tema", themeDefault: "Predefinito", themeDark: "Scuro", themeForest: "Foresta", themeNeutral: "Neutro", layout: "Layout", backgroundColor: "Colore dello sfondo", transparentBackground: "Sfondo trasparente", shortcuts: "Scorciatoie", downloadCode: "Scarica il codice", refreshPreview: "Aggiorna anteprima", offline: "Applicazione indipendente — nessun accesso alla rete richiesto", footer: "Mermaid Studio · motore Mermaid open source", emptyDiagram: "Diagramma vuoto", newDiagram: "Nuovo diagramma", newDiagramPrompt: "Nome del diagramma:", defaultDiagramName: "Il mio diagramma", savedDiagrams: "Diagrammi salvati", examples: { workflow: "Flusso di lavoro", sequence: "Sequenza", classes: "Classi", gantt: "Gantt" } },
  pt: { ...translations.en, exampleLabel: "Exemplo", copy: "Copiar", copied: "Copiado!", download: "Baixar .mmd", reset: "Redefinir", editor: "Editor", yourDiagram: "Seu diagrama", ready: "Pronto", rendering: "Renderizando…", upToDate: "Atualizado", syntaxError: "Erro de sintaxe", hint: "Dica: edite o código e a pré-visualização será atualizada automaticamente.", livePreview: "Pré-visualização ao vivo", render: "Renderização", customization: "Personalização", options: "Opções", theme: "Tema", themeDefault: "Padrão", themeDark: "Escuro", themeForest: "Floresta", themeNeutral: "Neutro", layout: "Layout", backgroundColor: "Cor de fundo", transparentBackground: "Fundo transparente", shortcuts: "Atalhos", downloadCode: "Baixar código", refreshPreview: "Atualizar pré-visualização", offline: "Aplicação autónoma — sem acesso à rede", footer: "Mermaid Studio · motor Mermaid de código aberto", emptyDiagram: "Diagrama vazio", newDiagram: "Novo diagrama", newDiagramPrompt: "Nome do diagrama:", defaultDiagramName: "Meu diagrama", savedDiagrams: "Diagramas guardados", examples: { workflow: "Fluxo de trabalho", sequence: "Sequência", classes: "Classes", gantt: "Gantt" } },
  nl: { ...translations.en, exampleLabel: "Voorbeeld", copy: "Kopiëren", copied: "Gekopieerd!", download: ".mmd downloaden", reset: "Resetten", editor: "Editor", yourDiagram: "Uw diagram", ready: "Gereed", rendering: "Bezig met renderen…", upToDate: "Bijgewerkt", syntaxError: "Syntaxisfout", hint: "Tip: bewerk de code en het voorbeeld wordt automatisch bijgewerkt.", livePreview: "Live voorbeeld", render: "Weergave", customization: "Aanpassing", options: "Opties", theme: "Thema", themeDefault: "Standaard", themeDark: "Donker", themeForest: "Bos", themeNeutral: "Neutraal", layout: "Indeling", backgroundColor: "Achtergrondkleur", transparentBackground: "Transparante achtergrond", shortcuts: "Sneltoetsen", downloadCode: "Code downloaden", refreshPreview: "Voorbeeld vernieuwen", offline: "Zelfstandige toepassing — geen netwerktoegang vereist", footer: "Mermaid Studio · open-source Mermaid-engine", emptyDiagram: "Leeg diagram", newDiagram: "Nieuw diagram", newDiagramPrompt: "Diagramnaam:", defaultDiagramName: "Mijn diagram", savedDiagrams: "Opgeslagen diagrammen", examples: { workflow: "Werkstroom", sequence: "Sequentie", classes: "Klassen", gantt: "Gantt" } },
  pl: { ...translations.en, exampleLabel: "Przykład", copy: "Kopiuj", copied: "Skopiowano!", download: "Pobierz .mmd", reset: "Resetuj", editor: "Edytor", yourDiagram: "Twój diagram", ready: "Gotowe", rendering: "Renderowanie…", upToDate: "Aktualne", syntaxError: "Błąd składni", hint: "Wskazówka: edytuj kod, a podgląd zaktualizuje się automatycznie.", livePreview: "Podgląd na żywo", render: "Wynik", customization: "Dostosowanie", options: "Opcje", theme: "Motyw", themeDefault: "Domyślny", themeDark: "Ciemny", themeForest: "Leśny", themeNeutral: "Neutralny", layout: "Układ", backgroundColor: "Kolor tła", transparentBackground: "Przezroczyste tło", shortcuts: "Skróty", downloadCode: "Pobierz kod", refreshPreview: "Odśwież podgląd", offline: "Aplikacja autonomiczna — nie wymaga dostępu do sieci", footer: "Mermaid Studio · silnik Mermaid open source", emptyDiagram: "Pusty diagram", newDiagram: "Nowy diagram", newDiagramPrompt: "Nazwa diagramu:", defaultDiagramName: "Mój diagram", savedDiagrams: "Zapisane diagramy", examples: { workflow: "Przepływ pracy", sequence: "Sekwencja", classes: "Klasy", gantt: "Gantt" } },
  ru: { ...translations.en, exampleLabel: "Пример", copy: "Копировать", copied: "Скопировано!", download: "Скачать .mmd", reset: "Сбросить", editor: "Редактор", yourDiagram: "Ваша диаграмма", ready: "Готово", rendering: "Отрисовка…", upToDate: "Обновлено", syntaxError: "Синтаксическая ошибка", hint: "Совет: измените код — предварительный просмотр обновится автоматически.", livePreview: "Предварительный просмотр", render: "Результат", customization: "Настройка", options: "Параметры", theme: "Тема", themeDefault: "По умолчанию", themeDark: "Тёмная", themeForest: "Лесная", themeNeutral: "Нейтральная", layout: "Компоновка", backgroundColor: "Цвет фона", transparentBackground: "Прозрачный фон", shortcuts: "Сочетания клавиш", downloadCode: "Скачать код", refreshPreview: "Обновить просмотр", offline: "Автономное приложение — доступ к сети не требуется", footer: "Mermaid Studio · движок Mermaid с открытым исходным кодом", emptyDiagram: "Пустая диаграмма", newDiagram: "Новая диаграмма", newDiagramPrompt: "Название диаграммы:", defaultDiagramName: "Моя диаграмма", savedDiagrams: "Сохранённые диаграммы", examples: { workflow: "Рабочий процесс", sequence: "Последовательность", classes: "Классы", gantt: "Гант" } },
  zh: { ...translations.en, exampleLabel: "示例", copy: "复制", copied: "已复制！", download: "下载 .mmd", reset: "重置", editor: "编辑器", yourDiagram: "您的图表", ready: "就绪", rendering: "正在渲染…", upToDate: "已更新", syntaxError: "语法错误", hint: "提示：编辑代码后，预览会自动更新。", livePreview: "实时预览", render: "渲染", customization: "自定义", options: "选项", theme: "主题", themeDefault: "默认", themeDark: "深色", themeForest: "森林", themeNeutral: "中性", layout: "布局", backgroundColor: "背景颜色", transparentBackground: "透明背景", shortcuts: "快捷键", downloadCode: "下载代码", refreshPreview: "刷新预览", offline: "独立应用 — 无需网络访问", footer: "Mermaid Studio · 开源 Mermaid 引擎", emptyDiagram: "空图表", newDiagram: "新建图表", newDiagramPrompt: "图表名称：", defaultDiagramName: "我的图表", savedDiagrams: "已保存的图表", examples: { workflow: "工作流", sequence: "序列", classes: "类", gantt: "甘特图" } },
  ja: { ...translations.en, exampleLabel: "例", copy: "コピー", copied: "コピーしました！", download: ".mmdをダウンロード", reset: "リセット", editor: "エディター", yourDiagram: "ダイアグラム", ready: "準備完了", rendering: "描画中…", upToDate: "更新済み", syntaxError: "構文エラー", hint: "ヒント：コードを編集するとプレビューが自動更新されます。", livePreview: "ライブプレビュー", render: "描画", customization: "カスタマイズ", options: "オプション", theme: "テーマ", themeDefault: "デフォルト", themeDark: "ダーク", themeForest: "フォレスト", themeNeutral: "ニュートラル", layout: "レイアウト", backgroundColor: "背景色", transparentBackground: "透明な背景", shortcuts: "ショートカット", downloadCode: "コードをダウンロード", refreshPreview: "プレビューを更新", offline: "スタンドアロンアプリ — ネットワークアクセス不要", footer: "Mermaid Studio · オープンソースのMermaidエンジン", emptyDiagram: "空のダイアグラム", newDiagram: "新しいダイアグラム", newDiagramPrompt: "ダイアグラム名：", defaultDiagramName: "マイダイアグラム", savedDiagrams: "保存したダイアグラム", examples: { workflow: "ワークフロー", sequence: "シーケンス", classes: "クラス", gantt: "ガント" } },
  ko: { ...translations.en, exampleLabel: "예제", copy: "복사", copied: "복사됨!", download: ".mmd 다운로드", reset: "초기화", editor: "편집기", yourDiagram: "다이어그램", ready: "준비됨", rendering: "렌더링 중…", upToDate: "최신 상태", syntaxError: "구문 오류", hint: "팁: 코드를 편집하면 미리보기가 자동으로 업데이트됩니다.", livePreview: "실시간 미리보기", render: "렌더링", customization: "사용자 지정", options: "옵션", theme: "테마", themeDefault: "기본", themeDark: "어두운 테마", themeForest: "숲", themeNeutral: "중립", layout: "레이아웃", backgroundColor: "배경색", transparentBackground: "투명한 배경", shortcuts: "바로가기", downloadCode: "코드 다운로드", refreshPreview: "미리보기 새로 고침", offline: "독립 실행형 애플리케이션 — 네트워크 액세스가 필요하지 않습니다", footer: "Mermaid Studio · 오픈 소스 Mermaid 엔진", emptyDiagram: "빈 다이어그램", newDiagram: "새 다이어그램", newDiagramPrompt: "다이어그램 이름:", defaultDiagramName: "내 다이어그램", savedDiagrams: "저장된 다이어그램", examples: { workflow: "워크플로", sequence: "시퀀스", classes: "클래스", gantt: "간트" } },
  ar: { ...translations.en, exampleLabel: "مثال", copy: "نسخ", copied: "تم النسخ!", download: "تنزيل .mmd", reset: "إعادة تعيين", editor: "المحرر", yourDiagram: "المخطط الخاص بك", ready: "جاهز", rendering: "جارٍ العرض…", upToDate: "محدّث", syntaxError: "خطأ نحوي", hint: "تلميح: عدّل التعليمات البرمجية وسيتم تحديث المعاينة تلقائيًا.", livePreview: "معاينة مباشرة", render: "العرض", customization: "التخصيص", options: "الخيارات", theme: "السمة", themeDefault: "افتراضي", themeDark: "داكن", themeForest: "غابة", themeNeutral: "محايد", layout: "التخطيط", backgroundColor: "لون الخلفية", transparentBackground: "خلفية شفافة", shortcuts: "اختصارات", downloadCode: "تنزيل التعليمات البرمجية", refreshPreview: "تحديث المعاينة", offline: "تطبيق مستقل — لا يتطلب الوصول إلى الشبكة", footer: "Mermaid Studio · محرك Mermaid مفتوح المصدر", emptyDiagram: "مخطط فارغ", newDiagram: "مخطط جديد", newDiagramPrompt: "اسم المخطط:", defaultDiagramName: "مخططي", savedDiagrams: "المخططات المحفوظة", examples: { workflow: "سير العمل", sequence: "تسلسل", classes: "فئات", gantt: "مخطط جانت" } },
});

Object.assign(translations.de, { deleteDiagram: "Diagramm löschen", confirmDeleteDiagram: "Dieses Diagramm löschen?" });
Object.assign(translations.es, { deleteDiagram: "Eliminar diagrama", confirmDeleteDiagram: "¿Eliminar este diagrama?" });
Object.assign(translations.it, { deleteDiagram: "Elimina diagramma", confirmDeleteDiagram: "Eliminare questo diagramma?" });
Object.assign(translations.pt, { deleteDiagram: "Excluir diagrama", confirmDeleteDiagram: "Excluir este diagrama?" });
Object.assign(translations.nl, { deleteDiagram: "Diagram verwijderen", confirmDeleteDiagram: "Dit diagram verwijderen?" });
Object.assign(translations.pl, { deleteDiagram: "Usuń diagram", confirmDeleteDiagram: "Usunąć ten diagram?" });
Object.assign(translations.ru, { deleteDiagram: "Удалить диаграмму", confirmDeleteDiagram: "Удалить эту диаграмму?" });
Object.assign(translations.zh, { deleteDiagram: "删除图表", confirmDeleteDiagram: "删除此图表？" });
Object.assign(translations.ja, { deleteDiagram: "ダイアグラムを削除", confirmDeleteDiagram: "このダイアグラムを削除しますか？" });
Object.assign(translations.ko, { deleteDiagram: "다이어그램 삭제", confirmDeleteDiagram: "이 다이어그램을 삭제하시겠습니까?" });
Object.assign(translations.ar, { deleteDiagram: "حذف المخطط", confirmDeleteDiagram: "هل تريد حذف هذا المخطط؟" });

const exampleDiagrams = {
  en: {
    workflow: `flowchart TD\n  A[Write Mermaid code] --> B{Valid render?}\n  B -->|Yes| C[Share the diagram]\n  B -->|No| D[Fix the code]\n  D --> A`,
    sequence: `sequenceDiagram\n  participant U as User\n  participant A as Application\n  U->>A: Sends a request\n  A-->>U: Returns the result`,
    classes: `classDiagram\n  class Animal {\n    +String name\n    +move()\n  }\n  class Duck\n  Animal <|-- Duck`,
    gantt: `gantt\n  title Project schedule\n  dateFormat  YYYY-MM-DD\n  section Design\n  Specifications :done, specs, 2026-01-01, 7d\n  Prototype :active, proto, after specs, 10d`,
  },
  fr: {
    workflow: `flowchart TD\n  A[Écrire du code Mermaid] --> B{Rendu valide ?}\n  B -->|Oui| C[Partager le diagramme]\n  B -->|Non| D[Corriger le code]\n  D --> A`,
    sequence: `sequenceDiagram\n  participant U as Utilisateur\n  participant A as Application\n  U->>A: Envoie une demande\n  A-->>U: Retourne le résultat`,
    classes: `classDiagram\n  class Animal {\n    +String name\n    +move()\n  }\n  class Duck\n  Animal <|-- Duck`,
    gantt: `gantt\n  title Planning du projet\n  dateFormat  YYYY-MM-DD\n  section Conception\n  Spécifications :done, specs, 2026-01-01, 7d\n  Prototype :active, proto, after specs, 10d`,
  },
};

const supportedLanguages = Object.keys(translations);
const browserLanguages = navigator.languages || [navigator.language || "en"];
const language = browserLanguages.map((locale) => locale.toLowerCase().split("-")[0])
  .find((locale) => supportedLanguages.includes(locale)) || "en";
const t = (key) => translations[language][key];
function applyLanguage() {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = t(element.dataset.i18n); });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => { element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel)); });
}

const $ = (id) => document.getElementById(id);
const source = $("source");
const preview = $("preview");
const diagramsStorageKey = "mermaid-diagrams";
let diagrams = [];
let activeDiagramId = "";
let renderTimer;
let lastSvg = "";

function populateExamples() {
  $("example").replaceChildren();
  Object.entries(translations[language].examples).forEach(([id, name]) => $("example").add(new Option(name, id)));
}

function diagramsForLanguage() { return exampleDiagrams[language] || exampleDiagrams.en; }
function initialDiagram() { return diagramsForLanguage().workflow; }
applyLanguage();
populateExamples();

function createDiagramId() {
  return `diagram-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function saveDiagrams() {
  localStorage.setItem(diagramsStorageKey, JSON.stringify(diagrams));
  localStorage.setItem("mermaid-active-diagram", activeDiagramId);
}

function saveCurrentDiagram() {
  const activeDiagram = diagrams.find((diagram) => diagram.id === activeDiagramId);
  if (!activeDiagram) return;
  activeDiagram.source = source.value;
  saveDiagrams();
}

function renderDiagramList() {
  const list = $("diagram-list");
  list.replaceChildren();
  diagrams.forEach((diagram) => {
    const row = document.createElement("div");
    row.className = "diagram-row";
    row.setAttribute("role", "listitem");
    const item = document.createElement("button");
    item.type = "button";
    item.className = `diagram-item${diagram.id === activeDiagramId ? " active" : ""}`;
    item.textContent = diagram.name;
    item.title = diagram.name;
    item.addEventListener("click", () => {
      if (diagram.id === activeDiagramId) return;
      saveCurrentDiagram();
      activeDiagramId = diagram.id;
      source.value = diagram.source;
      localStorage.setItem("mermaid-active-diagram", activeDiagramId);
      renderDiagramList();
      render();
    });
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "diagram-delete";
    deleteButton.textContent = "×";
    deleteButton.title = t("deleteDiagram");
    deleteButton.setAttribute("aria-label", t("deleteDiagram"));
    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteDiagram(diagram.id);
    });
    row.append(item, deleteButton);
    list.appendChild(row);
  });
}

function deleteDiagram(id) {
  const diagram = diagrams.find((item) => item.id === id);
  if (!diagram || !window.confirm(t("confirmDeleteDiagram"))) return;
  saveCurrentDiagram();
  const deletedIndex = diagrams.findIndex((item) => item.id === id);
  diagrams = diagrams.filter((item) => item.id !== id);
  if (!diagrams.length) {
    diagrams = [{ id: createDiagramId(), name: t("defaultDiagramName"), source: initialDiagram() }];
  }
  if (id === activeDiagramId) {
    activeDiagramId = diagrams[Math.min(deletedIndex, diagrams.length - 1)].id;
    source.value = diagrams.find((item) => item.id === activeDiagramId).source;
  }
  saveDiagrams();
  renderDiagramList();
  render();
}

function loadDiagrams() {
  try {
    const stored = JSON.parse(localStorage.getItem(diagramsStorageKey) || "[]");
    if (Array.isArray(stored)) diagrams = stored.filter((diagram) => diagram?.id && diagram?.name && typeof diagram.source === "string");
  } catch {
    diagrams = [];
  }
  if (!diagrams.length) {
    diagrams = [{ id: createDiagramId(), name: t("defaultDiagramName"), source: localStorage.getItem("mermaid-source") || initialDiagram() }];
  }
  activeDiagramId = localStorage.getItem("mermaid-active-diagram") || diagrams[0].id;
  if (!diagrams.some((diagram) => diagram.id === activeDiagramId)) activeDiagramId = diagrams[0].id;
  source.value = diagrams.find((diagram) => diagram.id === activeDiagramId).source;
  saveDiagrams();
  renderDiagramList();
}

loadDiagrams();

function render() {
  clearTimeout(renderTimer);
  renderTimer = setTimeout(async () => {
    removeMermaidErrorOutput();
    const code = source.value.trim() || `flowchart TD\n  A[${t("emptyDiagram")}]`;
    $("status").textContent = t("rendering");
    $("error").hidden = true;
    try {
      mermaid.initialize({
        startOnLoad: false,
        theme: $("theme").value,
        flowchart: { defaultRenderer: $("layout").value === "elk" ? "elk" : "dagre" },
        securityLevel: "strict",
      });
      const result = await mermaid.render(`diagram-${Date.now()}`, code);
      removeMermaidErrorOutput();
      lastSvg = result.svg;
      preview.innerHTML = result.svg;
      makeDiagramInteractive();
      if ($( "transparent").checked) preview.style.backgroundColor = "transparent";
      else preview.style.backgroundColor = $("background").value;
      $("status").textContent = t("upToDate");
      $("error").textContent = "";
      $("error").hidden = true;
      saveCurrentDiagram();
      localStorage.setItem("mermaid-source", source.value);
    } catch (error) {
      $("status").textContent = t("syntaxError");
      $("error").textContent = error?.message || String(error);
      $("error").hidden = false;
    }
  }, 180);
}

function removeMermaidErrorOutput() {
  document.querySelectorAll("body svg").forEach((svg) => {
    if (svg.querySelector(".error-icon, .error-text")) svg.remove();
  });
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function findSourceLines(identifiers) {
  const normalized = identifiers.filter(Boolean).map((identifier) => identifier.trim());
  if (!normalized.length) return [];
  const lines = source.value.split("\n");
  const matches = [];
  lines.forEach((line, index) => {
    if (normalized.every((identifier) => new RegExp(`\\b${escapeRegExp(identifier)}\\b`).test(line))) matches.push(index);
  });
  return matches;
}

function getElementIdentifiers(element) {
  const node = element.closest(".node");
  if (node?.id) {
    const match = node.id.match(/^(?:flowchart|class|state|journey|er)-(.+)-\d+$/);
    return match ? [match[1]] : [];
  }

  const edge = element.closest(".edgePath, .edgeLabel");
  const edgeId = edge?.id || element.closest("[id]")?.id || "";
  const match = edgeId.match(/^L-(.+)-(.+)-\d+(?:-label)?$/);
  if (!match) return [];
  return match.slice(1);
}

function selectSourceLines(lineIndexes) {
  if (!lineIndexes.length) return;
  const firstLine = Math.min(...lineIndexes);
  const lastLine = Math.max(...lineIndexes);
  const lines = source.value.split("\n");
  const start = lines.slice(0, firstLine).reduce((length, line) => length + line.length + 1, 0);
  const end = start + lines.slice(firstLine, lastLine + 1).join("\n").length;
  source.focus();
  source.setSelectionRange(start, end);
}

function makeDiagramInteractive() {
  preview.querySelectorAll(".node, .edgePath, .edgeLabel").forEach((element) => {
    element.addEventListener("click", (event) => {
      event.stopPropagation();
      const identifiers = getElementIdentifiers(element);
      selectSourceLines(findSourceLines(identifiers));
    });
  });
}

function download(name, content, type) {
  const link = document.createElement("a");
  const url = URL.createObjectURL(new Blob([content], { type }));
  link.href = url;
  link.download = name;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportableSvg(svg) {
  // Mermaid peut produire du HTML dans foreignObject. Les balises HTML
  // tolèrent <br>, alors qu'un fichier SVG XML exige <br />.
  const xml = svg
    .replace(/<br(\s[^>]*)?>/gi, "<br$1 />")
    .replace(/<hr(\s[^>]*)?>/gi, "<hr$1 />")
    .replace(/<img(\s[^>]*)?>/gi, "<img$1 />")
    .replace(/<input(\s[^>]*)?>/gi, "<input$1 />");
  const svgStart = xml.match(/<svg\b[^>]*>/i);
  if (!svgStart) throw new Error(t("invalidSvg"));
  const attributes = svgStart[0];
  let updatedAttributes = attributes;
  if (!/\sxmlns=/.test(attributes)) updatedAttributes = updatedAttributes.replace(/<svg\b/i, '<svg xmlns="http://www.w3.org/2000/svg"');
  if (!/\sxmlns:xlink=/.test(attributes)) updatedAttributes = updatedAttributes.replace(/<svg\b/i, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
  return `<?xml version="1.0" encoding="UTF-8"?>\n${xml.replace(attributes, updatedAttributes)}`;
}

$("source").addEventListener("input", () => {
  saveCurrentDiagram();
  $("error").textContent = "";
  $("error").hidden = true;
  render();
});
["theme", "layout", "background", "transparent"].forEach((id) => $(id).addEventListener("change", render));
$("example").addEventListener("change", (event) => { source.value = diagramsForLanguage()[event.target.value]; render(); });
$("reset").addEventListener("click", () => { source.value = initialDiagram(); $("theme").value = "default"; saveCurrentDiagram(); render(); });
$("new-diagram").addEventListener("click", () => {
  const name = window.prompt(t("newDiagramPrompt"), `${t("defaultDiagramName")} ${diagrams.length + 1}`);
  if (name === null) return;
  const diagramName = name.trim() || `${t("defaultDiagramName")} ${diagrams.length + 1}`;
  saveCurrentDiagram();
  const diagram = { id: createDiagramId(), name: diagramName, source: initialDiagram() };
  diagrams.push(diagram);
  activeDiagramId = diagram.id;
  source.value = diagram.source;
  saveDiagrams();
  renderDiagramList();
  render();
});
$("copy").addEventListener("click", async () => { await navigator.clipboard.writeText(source.value); $("copy").textContent = t("copied"); setTimeout(() => $("copy").textContent = t("copy"), 1200); });
$("download").addEventListener("click", () => download("diagramme.mmd", source.value, "text/plain"));
$("export-svg").addEventListener("click", () => {
  if (!lastSvg) return;
  try {
    download("diagramme.svg", exportableSvg(lastSvg), "image/svg+xml;charset=utf-8");
  } catch (error) {
    $("error").textContent = error.message;
    $("error").hidden = false;
  }
});
$("export-pdf").addEventListener("click", () => {
  if (lastSvg) window.print();
});
$("export-png").addEventListener("click", () => {
  if (!lastSvg) return;
  const image = new Image();
  image.onload = () => { const canvas = document.createElement("canvas"); canvas.width = image.width * 2; canvas.height = image.height * 2; canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height); canvas.toBlob((blob) => { const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = "diagramme.png"; link.click(); }, "image/png"); };
  image.src = URL.createObjectURL(new Blob([lastSvg], { type: "image/svg+xml" }));
});
document.addEventListener("keydown", (event) => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") { event.preventDefault(); $("download").click(); } if ((event.ctrlKey || event.metaKey) && event.key === "Enter") { event.preventDefault(); render(); } });

render();
