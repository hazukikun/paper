import DocumentsScreen, { type DocumentFile } from "./components/DocumentsScreen";

// The two documents shown on the screen. In a real app this list would
// come from the server; here we hard-code it to match the Figma design.
const documents: DocumentFile[] = [
  {
    id: "1",
    name: "Заявление об открытии банковского счёта и предоставлении карты",
    extension: "PDF",
    size: "71.66 KB",
  },
  {
    id: "2",
    name: "Согласие на передачу и обработку персональных данных",
    extension: "PDF",
    size: "56.29 KB",
  },
];

export default function App() {
  return (
    <DocumentsScreen
      title="Документы на оформление карты"
      subtitle="Прочитайте документы и нажмите Подписать"
      documents={documents}
      onDownload={(doc) => console.log("Скачать:", doc.name)}
      onSign={() => console.log("Подписать")}
    />
  );
}
