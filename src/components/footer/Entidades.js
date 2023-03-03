import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import FeaturedPost from './EntidadesCard';
import Typography from '@mui/material/Typography';

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 1',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
      link: 'https://github.com/mui/material-ui/blob/v5.11.11/docs/data/material/getting-started/templates/blog/Blog.js'
  },
  {
    title: 'Post title',
    date: 'Nov 2',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
      link: 'https://github.com/mui/material-ui/blob/v5.11.11/docs/data/material/getting-started/templates/blog/Blog.js'
  },
  {
    title: 'Post title',
    date: 'Nov 3',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
      link: 'https://github.com/mui/material-ui/blob/v5.11.11/docs/data/material/getting-started/templates/blog/Blog.js'
  },
  {
    title: 'Post title',
    date: 'Nov 4',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    link: 'https://github.com/mui/material-ui/blob/v5.11.11/docs/data/material/getting-started/templates/blog/Blog.js'
  }, 
  {
    title: 'Post title',
    date: 'Nov 5',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    link: 'https://github.com/mui/material-ui/blob/v5.11.11/docs/data/material/getting-started/templates/blog/Blog.js'
  },
  {
    title: 'Post title',
    date: 'Nov 6',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    link: 'https://github.com/mui/material-ui/blob/v5.11.11/docs/data/material/getting-started/templates/blog/Blog.js'
  },
  {
    title: 'Post title',
    date: 'Nov 7',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    link: 'https://github.com/mui/material-ui/blob/v5.11.11/docs/data/material/getting-started/templates/blog/Blog.js'
  },
  {
    title: 'Post title',
    date: 'Nov 8',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    link: 'https://github.com/mui/material-ui/blob/v5.11.11/docs/data/material/getting-started/templates/blog/Blog.js'
  },
  {
    title: 'Post title',
    date: 'Nov 9',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    link: 'https://github.com/mui/material-ui/blob/v5.11.11/docs/data/material/getting-started/templates/blog/Blog.js'
  },
  {
    title: 'Post title',
    date: 'Nov 10',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    link: 'https://github.com/mui/material-ui/blob/v5.11.11/docs/data/material/getting-started/templates/blog/Blog.js'
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    link: 'https://github.com/mui/material-ui/blob/v5.11.11/docs/data/material/getting-started/templates/blog/Blog.js'
  },
  {
    title: 'Post title',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    link: 'https://github.com/mui/material-ui/blob/v5.11.11/docs/data/material/getting-started/templates/blog/Blog.js'
  },
  {
    title: 'Post title',
    date: 'Nov 13',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    link: 'https://github.com/mui/material-ui/blob/v5.11.11/docs/data/material/getting-started/templates/blog/Blog.js'
  },
  {
    title: 'Post title',
    date: 'Nov 14',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    link: 'https://github.com/mui/material-ui/blob/v5.11.11/docs/data/material/getting-started/templates/blog/Blog.js'
  },
  {
    title: 'Post title',
    date: 'Nov 15',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    link: 'https://github.com/mui/material-ui/blob/v5.11.11/docs/data/material/getting-started/templates/blog/Blog.js'
  },
  {
    title: 'Post title',
    date: 'Nov 16',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    link: 'https://github.com/mui/material-ui/blob/v5.11.11/docs/data/material/getting-started/templates/blog/Blog.js'
  }
];

export default function CardsEntidades() {
  return (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Conoce Nuestas entidades</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          </AccordionDetails>
        </Accordion>
  );
}