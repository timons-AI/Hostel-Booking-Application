import _ from "lodash";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import Pagination from "../../base-components/Pagination";
import { FormInput, FormSelect } from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import { Dialog, Menu } from "../../base-components/Headless";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { User } from "lucide-react";
import Notification from "../../base-components/Notification";
import toast from "react-hot-toast";

export type User = {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  updatedAt: string;
  createdAt: string;
};

function Main() {
  const [deleteModalPreview, setDeleteModalPreview] = useState(false);
  const deleteButtonRef = useRef(null);

  const [data, setData] = useState<any>(null);
  useEffect(() => {
    axios.get("/admin/users").then((res) => {
      setData(res.data);
    });
  }, []);
  if (!data) {
    return <>Loading please wait </>;
  }
  const users: User[] = data.data;

  const handleDelete = async (id: string) => {
    try {
      // await axios.delete(`/admin/users/${id}`);
      console.log(id);
      setData((prevData: any) => ({
        ...prevData,
        data: prevData.data.filter((user: User) => user._id !== id),
      }));
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  return (
    <>
      <h2 className="mt-10 text-lg font-medium intro-y">Users Layout</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
          <a href="/users/create">
            <Button variant="primary" className="mr-2 shadow-md">
              Add New User
            </Button>
          </a>
        </div>
        {_.take(users, 10).map((user, userKey) => (
          <div key={userKey} className="col-span-12 intro-y md:col-span-6">
            <div className="box">
              <div className="flex flex-col items-center p-5 lg:flex-row">
                <div className="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                  <User className=" w-full h-full rounded-full" />
                </div>
                <div className="mt-3 text-center lg:ml-2 lg:mr-auto lg:text-left lg:mt-0">
                  <a href="" className="font-medium">
                    {user.username}
                  </a>
                  <div className="text-slate-500 text-xs mt-0.5">
                    {user.email}
                  </div>
                </div>
                <div className="flex mt-4 lg:mt-0">
                  <div className="text-center">
                    <Button
                      as="a"
                      href="#"
                      variant="primary"
                      onClick={(event: React.MouseEvent) => {
                        event.preventDefault();
                        setDeleteModalPreview(true);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                  <Dialog
                    open={deleteModalPreview}
                    onClose={() => {
                      setDeleteModalPreview(false);
                    }}
                    initialFocus={deleteButtonRef}
                  >
                    <Dialog.Panel className="bg-white">
                      <div className="p-5 text-center">
                        <Lucide
                          icon="XCircle"
                          className="w-16 h-16 mx-auto mt-3 text-danger"
                        />
                        <div className="mt-5 text-3xl">Are you sure?</div>
                        <div className="mt-2 text-slate-500">
                          Do you really want to delete these records? <br />
                          This process cannot be undone.
                        </div>
                      </div>
                      <div className="px-5 pb-8 text-center">
                        <Button
                          type="button"
                          variant="outline-secondary"
                          onClick={() => {
                            setDeleteModalPreview(false);
                          }}
                          className="w-24 mr-1"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="button"
                          variant="danger"
                          className="w-24"
                          ref={deleteButtonRef}
                          onClick={() => {
                            handleDelete(user._id);
                            setDeleteModalPreview(false);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </Dialog.Panel>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap">
          <Pagination className="w-full sm:w-auto sm:mr-auto">
            <Pagination.Link>
              <Lucide icon="ChevronsLeft" className="w-4 h-4" />
            </Pagination.Link>
            <Pagination.Link>
              <Lucide icon="ChevronLeft" className="w-4 h-4" />
            </Pagination.Link>
            <Pagination.Link>...</Pagination.Link>
            <Pagination.Link>1</Pagination.Link>
            <Pagination.Link active>2</Pagination.Link>
            <Pagination.Link>3</Pagination.Link>
            <Pagination.Link>...</Pagination.Link>
            <Pagination.Link>
              <Lucide icon="ChevronRight" className="w-4 h-4" />
            </Pagination.Link>
            <Pagination.Link>
              <Lucide icon="ChevronsRight" className="w-4 h-4" />
            </Pagination.Link>
          </Pagination>
          <FormSelect className="w-20 mt-3 !box sm:mt-0">
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </FormSelect>
        </div>
      </div>
    </>
  );
}

export default Main;
