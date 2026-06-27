import { Upload } from "lucide-react";

export default function DragDrop({
    selectedFile,
    setSelectedFile,
}) {

    const handleChange = (e) => {

        const file = e.target.files[0];

        if (file) {
            setSelectedFile(file);
        }

    };

    return (

        <div className="bg-white rounded-2xl border-2 border-dashed border-blue-300 py-2 text-center">

            <Upload
                size={30}
                className="mx-auto text-blue-600"
            />

            <h2 className="text-lg font-semibold mt-2">

                Drag & Drop Resume

            </h2>

            <p className="text-gray-500 mt-1">

               PDF • Maximum 5 MB

            </p>

            <input

                type="file"

                accept=".pdf"

                onChange={handleChange}

                className="hidden"

                id="resume"

            />

            <label

                htmlFor="resume"

                className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg cursor-pointer"

            >

                Browse Resume

            </label>

            {

                selectedFile && (

                    <p className="mt-5 font-medium text-green-600">

                        {selectedFile.name}

                    </p>

                )

            }

        </div>

    );

}