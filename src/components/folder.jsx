import FolderIcon from "../assets/images/folder.svg";
import "./folder.css";
export const Folder = ({ title }) => {
  return (
    <div className="folder">
      <img src={FolderIcon} alt={"folderIcon"} />
      <span className="title">{title}</span>
    </div>
  );
};
