
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Guest from './Guest'

export default function Form() {
  return (
      <div className="flex items-center justify-center min-h-screen">
          <form className="w-2/3 p-8 rounded ">
              <div className="">
                  <div className="">
                      <h2 className="text-base font-semibold leading-7 text-gray-900">Form Reserve</h2>
                      <p className="mt-1 text-sm leading-6 text-gray-600"></p>

                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div className="sm:col-span-3">
                              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                  Name order
                              </label>
                              <div className="mt-2">
                                  <input
                                      id="first-name"
                                      name="first-name"
                                      type="text"
                                      autoComplete="given-name"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                              </div>
                          </div>

                          <div className="sm:col-span-3">
                              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                  Phone Number
                              </label>
                              <div className="mt-2">
                                  <input
                                      id="last-name"
                                      name="last-name"
                                      type="text"
                                      autoComplete="family-name"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                              </div>
                          </div>
                      </div>

                      <div className="">
                          <div className="">
                              <Guest />
                          </div>
                      </div>

                      <div className="mt-6">
                          <button
                              type="button"
                              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                              Add Menu
                          </button>
                      </div>
                  </div>

                  <div className="border-b py-10 border-gray-900/10">
                      <div className="mt-10 space-y-10">
                          <fieldset>
                              <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notification</legend>
                              <p className="text-gray-500">Get notified for reminder your reserve.</p>

                              <div className="mt-6 space-y-6">
                                  <div className="relative flex gap-x-3">
                                      <div className="flex h-6 items-center">
                                          <input
                                              id="comments"
                                              name="comments"
                                              type="checkbox"
                                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                          />
                                      </div>
                                      <div className="text-sm leading-6">
                                          <label htmlFor="comments" className="font-medium text-gray-900">
                                              Send before 5 minutes
                                          </label>
                                      </div>
                                  </div>
                                  <div className="relative flex gap-x-3">
                                      <div className="flex h-6 items-center">
                                          <input
                                              id="candidates"
                                              name="candidates"
                                              type="checkbox"
                                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                          />
                                      </div>
                                      <div className="text-sm leading-6">
                                          <label htmlFor="candidates" className="font-medium text-gray-900">
                                              Send before 10 minutes
                                          </label>
                                      </div>
                                  </div>
                                  <div className="relative flex gap-x-3">
                                      <div className="flex h-6 items-center">
                                          <input
                                              id="offers"
                                              name="offers"
                                              type="checkbox"
                                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                          />
                                      </div>
                                      <div className="text-sm leading-6">
                                          <label htmlFor="offers" className="font-medium text-gray-900">
                                              Send before 15 minutes
                                          </label>
                                      </div>
                                  </div>
                              </div>
                          </fieldset>
                      </div>
                  </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                      Cancel
                  </button>
                  <button
                      type="submit"
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                      Make Reserve
                  </button>
              </div>
          </form>
      </div>
  )
}
