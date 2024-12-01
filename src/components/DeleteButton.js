import {useState} from "react";

export default function DeleteButton({label,onDelete}) {
  const [showConfirm, setShowConfirm] = useState(false);

  if (showConfirm) {
    return (
      <div className="fixed bg-black/80 inset-0 flex items-center h-full justify-center">
        <div className="bg-white p-4 rounded-lg">
          <div>Bạn có chắc chắn muốn xóa?</div>
          <div className="flex gap-2 mt-1">
            <button type="button" onClick={() => setShowConfirm(false)}>
              Hủy
            </button>
            <button
              onClick={() => {
                onDelete();
                setShowConfirm(false);
              }}
              type="button"
              className="primary">
              Vâng,&nbsp;Xóa!
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button type="button" className="max-w-[665px] mx-auto" onClick={() => setShowConfirm(true)}>
      {label}
    </button>
  );
}