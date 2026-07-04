import { useRef, useState } from "react";

function UploadSection() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [fileName, setFileName] = useState("");

  const handleBrowse = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <section className="py-24 px-6">

      <h2 className="text-4xl font-bold text-center">
        Upload Your Resume
      </h2>

      <p className="text-center text-gray-400 mt-4">
        Upload PDF or DOCX and let AI analyze your resume.
      </p>

      <div className="max-w-4xl mx-auto mt-12">

        <div className="border-2 border-dashed border-blue-500 rounded-2xl p-16 text-center">

          <div className="text-6xl">
            📄
          </div>

          <h3 className="text-2xl mt-6 font-semibold">
            Drag & Drop Resume
          </h3>

          <p className="mt-4 text-gray-400">
            PDF • DOC • DOCX
          </p>

          <button
            onClick={handleBrowse}
            className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl transition"
          >
            Browse File
          </button>

          <input
            type="file"
            ref={inputRef}
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />

          {fileName && (
            <div className="mt-8">

              <p className="text-green-400">
                Selected File
              </p>

              <h3 className="mt-2 text-xl">
                {fileName}
              </h3>

              <button
                className="mt-6 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-xl"
              >
                Analyze Resume
              </button>

            </div>
          )}

        </div>

      </div>

    </section>
  );
}

export default UploadSection;