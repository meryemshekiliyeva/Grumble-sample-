import React from 'react';

const NewComplaint = () => {
  return (
    <div className="container mx-auto max-w-2xl py-12 px-4">
      <h1 className="text-3xl font-bold tracking-tight text-center">
        Submit a New Complaint
      </h1>
      <p className="text-center text-muted-foreground mt-2">
        Fill out the form below to share your experience.
      </p>

      <form className="mt-8 space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-foreground">
            Complaint Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 block w-full rounded-md border-border bg-card shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            placeholder="e.g., Incorrect food delivery"
            required
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-foreground">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="mt-1 block w-full rounded-md border-border bg-card shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            placeholder="e.g., Wolt"
            required
          />
        </div>

        <div>
          <label htmlFor="summary" className="block text-sm font-medium text-foreground">
            Complaint Summary
          </label>
          <textarea
            id="summary"
            name="summary"
            rows="5"
            className="mt-1 block w-full rounded-md border-border bg-card shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            placeholder="Please describe your issue in detail..."
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 text-lg font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90"
          >
            Submit Complaint
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewComplaint;