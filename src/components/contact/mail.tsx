"use client";

import React, { forwardRef } from "react";
import { Button } from "../ui/button";

// eslint-disable-next-line react/display-name
const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("/api/emails", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      alert("Message successfully sent");
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  }
  return (
    <>
      <>
        <main
          className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 gap-4"
          ref={ref}
        >
          <section>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-semibold text-center text-white">
                Contact Us
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-300 sm:text-xl">
                Got a technical issue? Want to send feedback about a feature?
                Need details about our Business plan? Let us know.
              </p>
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="flex w-full gap-4">
                  <div className="w-full">
                    <label
                      htmlFor="form-name"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Your Name
                    </label>
                    <input
                      id="form-name"
                      name="name"
                      type="name"
                      className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="form-email"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Your email
                    </label>
                    <input
                      id="form-email"
                      name="email"
                      type="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="name@gmail.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="form-subject"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Subject
                  </label>
                  <input
                    id="form-subject"
                    name="subject"
                    type="text"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="form-message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    className="block p-2.5 h-32 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  // formAction={handleSubmit}
                  className="py-2 px-8 max-w-[200px] button-services"
                >
                  Send message
                </Button>
              </form>
            </div>
          </section>
        </main>
      </>
    </>
  );
});

export default Contact;
