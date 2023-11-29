import { Link } from "react-router-dom";

const VContentManagement = () => {
    return (
        <div className="relative">
            <Link className="absolute top-0 right-0 btn btn-lg btn-info w-1/4 text-white" to="/dashboard/content-management/add-blog"><button>Add Blog</button></Link>
        </div>
    );
};

export default VContentManagement;