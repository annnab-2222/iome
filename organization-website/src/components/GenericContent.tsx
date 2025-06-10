import { FileText, Plus } from 'lucide-react';

interface GenericContentProps {
  title: string;
}

const GenericContent = ({ title }: GenericContentProps) => {
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <div className="space-y-6 w-full max-w-6xl mx-auto p-4">
      <div className="rounded-lg border border-gray-200 p-6 w-full bg-white shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-800">
            {capitalizedTitle} Overview
          </h2>
          <button className="px-3 py-1.5 text-sm text-white rounded-md flex items-center bg-blue-500 hover:bg-blue-600">
            <Plus size={14} className="mr-1.5" />
            <span>Add New</span>
          </button>
        </div>

        <div className="flex items-center justify-center py-12 text-center text-gray-600">
          <div>
            <FileText size={48} className="mx-auto mb-4 text-gray-400" />
            <p>This is the {title} page content.</p>
            <p className="text-sm mt-2">Content for this section is under development.</p>
            <button className="mt-4 px-4 py-2 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericContent;