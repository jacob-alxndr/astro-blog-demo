import Alert from "./alert";
import Footer from "./footer";

export default function Layout({ preview, currentSlug, children }) {
  console.log(preview, currentSlug);
  return (
    <>
      {/* { preview && <Alert preview={preview} currentSlug={currentSlug} />} */}
      <Alert preview={preview} currentSlug={currentSlug} />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
