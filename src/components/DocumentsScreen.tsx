import "./DocumentsScreen.css";

// Shape of a single document in the list.
export type DocumentFile = {
  id: string;
  name: string;
  extension: string; // e.g. "PDF"
  size: string; // e.g. "71.66 KB"
};

type DocumentsScreenProps = {
  title: string;
  subtitle: string;
  documents: DocumentFile[];
  onDownload?: (doc: DocumentFile) => void;
  onSign?: () => void;
};

// The left navigation menu. It's only shown on wide (desktop) screens —
// the CSS hides it on phones.
const menuItems = [
  { id: "home", label: "Главная", icon: HomeIcon },
  { id: "payments", label: "Платежи", icon: PaymentsIcon },
  { id: "history", label: "История", icon: HistoryIcon },
  { id: "showcase", label: "Витрина", icon: ShowcaseIcon },
  { id: "more", label: "Ещё", icon: MoreIcon },
];

export default function DocumentsScreen({
  title,
  subtitle,
  documents,
  onDownload,
  onSign,
}: DocumentsScreenProps) {
  return (
    <div className="app">
      {/* Desktop-only side menu */}
      <aside className="sidebar">
        <nav className="sidebar__nav">
          {menuItems.map((item) => (
            <button key={item.id} type="button" className="sidebar__item">
              <span className="sidebar__icon" aria-hidden="true">
                {item.icon()}
              </span>
              <span className="sidebar__label">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Navbar + card column */}
      <div className="content">
        <header className="navbar">
          <h1 className="navbar__title">Документы</h1>
        </header>

        <main className="card">
          <div className="card__heading">
            <h2 className="card__title">{title}</h2>
            <p className="card__subtitle">{subtitle}</p>
          </div>

          <ul className="file-list">
            {documents.map((doc) => (
              <li key={doc.id}>
                <div className="file-row">
                  <span className="file-row__icon" aria-hidden="true">
                    {PdfIcon}
                  </span>
                  <div className="file-row__text">
                    <p className="file-row__name">{doc.name}</p>
                    <p className="file-row__meta">
                      {doc.extension} • {doc.size}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="file-row__download"
                    aria-label={`Скачать «${doc.name}»`}
                    onClick={() => onDownload?.(doc)}
                  >
                    {DownloadIcon}
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="card__footer">
            <button type="button" className="sign-button" onClick={onSign}>
              Подписать
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ---- Inline SVG icons (no external image dependencies) ---- */

const PdfIcon = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 0h11a3 3 0 0 1 2.12.88l8 8A3 3 0 0 1 32 11v17a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4Z"
      fill="var(--pdf-red)"
    />
    <rect x="11" y="13" width="3.5" height="3.5" rx="1" fill="#fff" />
    <rect x="16.5" y="13.5" width="9" height="2.5" rx="1.25" fill="#fff" />
    <rect x="11" y="19.5" width="3.5" height="3.5" rx="1" fill="#fff" />
    <rect x="16.5" y="20" width="9" height="2.5" rx="1.25" fill="#fff" />
  </svg>
);

const DownloadIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 4v11m0 0 4-4m-4 4-4-4M5 19h14"
      stroke="var(--icon)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function HomeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4v-5h-6v5H5a1 1 0 0 1-1-1v-8.5Z"
        fill="var(--icon)"
      />
    </svg>
  );
}

function PaymentsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" fill="var(--icon)" />
      <path
        d="M10 8h2.5a2 2 0 1 1 0 4H10m0 0v4m0-4v-1m-1 1h4"
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HistoryIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" fill="var(--icon)" />
      <path d="M12 8v4l2.5 2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShowcaseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="13" height="13" rx="3" fill="var(--icon)" />
      <rect x="9" y="4" width="11" height="11" rx="3" fill="var(--icon)" opacity="0.5" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="2.2" fill="var(--icon)" />
      <circle cx="17" cy="7" r="2.2" fill="var(--icon)" />
      <circle cx="7" cy="17" r="2.2" fill="var(--icon)" />
      <circle cx="17" cy="17" r="2.2" fill="var(--icon)" />
    </svg>
  );
}
