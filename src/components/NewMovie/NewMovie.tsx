import React, { useState } from 'react';
import { TextField } from '../TextField';

type Props = {
  onAdd: (movie: MovieType) => void;
};

type MovieType = {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
};

export const NewMovie: React.FC<Props> = ({ onAdd }) => {
  // Increase the count after successful form submission
  // to reset touched status of all the `Field`s
  // #region State
  const [count, setCount] = useState(0);

  const [title, setTitle] = useState('');
  const [description, SetDescription] = useState('');
  const [imageField, setImageField] = useState('');
  const [imbdUrlField, setImbdUrlField] = useState('');
  const [imdbIdField, setImdbIdField] = useState('');
  //#endregion

  // #region Handle(functions)
  const handleTitleChange = (newValue: string) => {
    setTitle(newValue.trimStart());
  };

  const handleImageChange = (newValue: string) => {
    setImageField(newValue.trimStart());
  };

  const handleImdbUrlChange = (newValue: string) => {
    setImbdUrlField(newValue.trimStart());
  };

  const handleImdbId = (newValue: string) => {
    setImdbIdField(newValue.trimStart());
  };
  // #endregion

  const isActiveButton =
    !title.trimStart() ||
    !imageField.trimStart() ||
    !imbdUrlField.trimStart() ||
    !imdbIdField.trimStart();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (isActiveButton) {
      return;
    }

    onAdd({
      title: title.trimStart(),
      description: description.trimStart(),
      imgUrl: imageField.trimStart(),
      imdbUrl: imbdUrlField.trimStart(),
      imdbId: imdbIdField.trimStart(),
    });

    setTitle('');
    SetDescription('');
    setImageField('');
    setImbdUrlField('');
    setImdbIdField('');
    setCount(count + 1);
  };

  return (
    <form className="NewMovie" key={count} onSubmit={handleSubmit}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={handleTitleChange}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={description}
        onChange={SetDescription}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={imageField}
        onChange={handleImageChange}
        required
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={imbdUrlField}
        onChange={handleImdbUrlChange}
        required
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={imdbIdField}
        onChange={handleImdbId}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={isActiveButton}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
