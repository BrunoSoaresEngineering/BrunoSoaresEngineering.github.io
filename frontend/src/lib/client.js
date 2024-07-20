import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectData = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  baseURL: 'https://cdn.sanity.io/'
};

const client = createClient({
  projectId: projectData.projectId,
  dataset: projectData.dataset,
  apiVersion: '2022-02-01',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

const urlFor = (source) => builder.image(source);

const urlForFile = (file) => {
  // eslint-disable-next-line no-unused-vars
  const [_file, id, extension] = file.asset._ref.split('-');
  const { baseURL, projectId, dataset } = projectData;

  return `${baseURL}files/${projectId}/${dataset}/${id}.${extension}?dl=`;
};

export {
  client,
  urlFor,
  urlForFile
};
