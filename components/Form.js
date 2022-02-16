export const TextField = ({name, ...props}) => (
  <div className="space-y-1">
    <label 
    htmlFor={name}
    className="block text-sm font-medium text-gray-700"
    >{name}</label>
    <input {...props} className="block py-2 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-full sm:text-sm border border-gray-300 rounded-md"/>
  </div>
)