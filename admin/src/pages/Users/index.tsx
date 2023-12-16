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
  console.log(data);

  const handleDelete = async (id: string) => {
    // axios.delete(`/admin/users/${id}`).then((res) => {
    //   console.log(res);
    // });<div className="text-center">
    toast.success("this is working ");
    axios.delete(`/admin/users/${id}`).then((res) => {
      console.log(res);
    });
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
          {/* <Menu>
            <Menu.Button as={Button} className="px-2 !box">
              <span className="flex items-center justify-center w-5 h-5">
                <Lucide icon="Plus" className="w-4 h-4" />
              </span>
            </Menu.Button>
            <Menu.Items className="w-40">
              <Menu.Item>
                <Lucide icon="Users" className="w-4 h-4 mr-2" /> Add Group
              </Menu.Item>
              <Menu.Item>
                <Lucide icon="MessageCircle" className="w-4 h-4 mr-2" /> Send
                Message
              </Menu.Item>
            </Menu.Items>
          </Menu>
          <div className="hidden mx-auto md:block text-slate-500">
            Showing 1 to 10 of 150 entries
          </div>
          <div className="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
            <div className="relative w-56 text-slate-500">
              <FormInput
                type="text"
                className="w-56 pr-10 !box"
                placeholder="Search..."
              />
              <Lucide
                icon="Search"
                className="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
              />
            </div>
          </div> */}
        </div>
        {/* BEGIN: Users Layout */}
        {_.take(users, 10).map((user, userKey) => (
          <div key={userKey} className="col-span-12 intro-y md:col-span-6">
            <div className="box">
              <div className="flex flex-col items-center p-5 lg:flex-row">
                <div className="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                  {/* <img
                    alt="Will be added in future version"
                    className="rounded-full"
                    src={user.photos[0]}
                  /> */}
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
                  {/* <Button variant="primary" className="px-2 py-1 mr-2">
                    Message
                  </Button> */}
                  {/* <Button variant="outline-secondary" className="px-2 py-1">
                    Delete
                  </Button> */}
                  {/* BEGIN: Modal Toggle */}
                  <div className="text-center">
                    <Button
                      as="a"
                      href="#"
                      variant="primary"
                      onClick={(event: React.MouseEvent) => {
                        event.preventDefault();
                        handleDelete(user._id);
                        setDeleteModalPreview(true);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                  {/* END: Modal Toggle */}
                  {/* BEGIN: Modal Content */}
                  <Dialog
                    open={deleteModalPreview}
                    onClose={() => {
                      setDeleteModalPreview(false);
                    }}
                    initialFocus={deleteButtonRef}
                  >
                    <Dialog.Panel>
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
                        >
                          Delete
                        </Button>
                      </div>
                    </Dialog.Panel>
                  </Dialog>
                  {/* END: Modal Content */}
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* BEGIN: Users Layout */}
        {/* END: Pagination */}
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
        {/* END: Pagination */}
      </div>
    </>
  );
}

export default Main;
