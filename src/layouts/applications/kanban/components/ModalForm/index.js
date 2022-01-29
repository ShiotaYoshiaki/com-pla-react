import PropTypes from "prop-types";
import { Grid, Icon } from "@mui/material";
import MDButton from "components/MDButton";
import FormField from "layouts/applications/kanban/components/FormFIeld";
import MDBox from "components/MDBox";
import { useState } from "react";

function ModalForm({ formData }) {
  const { formField, values, isSubmitting, setFieldValue } = formData;
  const { content, label, detail, progress, urls } = formField;
  const {
    content: contentValue,
    label: labelValue,
    detail: detailValue,
    progress: progressValue,
    urls: urlsValue,
  } = values;

  const [inputtedUrls, setInputtedUrls] = useState(urlsValue);
  const setUrlsToFormik = (value) => {
    setFieldValue(urls.name, value);
  };
  const handleUrls = (e, i) => {
    const nextValue = e.target.value;
    setInputtedUrls((prev) => {
      const next = [...prev];
      next[i] = nextValue;
      setUrlsToFormik(next);
      return next;
    });
  };
  const addUrlField = () => {
    setInputtedUrls((prev) => {
      const next = [...prev];
      next.push("https://");
      setUrlsToFormik(next);
      return next;
    });
  };
  const removeUrlField = (i) => {
    setInputtedUrls((prev) => {
      const next = [...prev];
      next.splice(i, 1);
      setUrlsToFormik(next);
      return next;
    });
  };

  return (
    <MDBox>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormField
            type={content.type}
            label={content.label}
            name={content.name}
            value={contentValue}
            placeholder={content.placeholder}
          />
        </Grid>
        <Grid item xs={12}>
          {label.options.map((option) => (
            <MDButton
              size="small"
              variant={labelValue === option.value ? "gradient" : "outlined"}
              color={option.color}
              key={`label-${option.value}`}
              name={label.name}
              onClick={() => setFieldValue(label.name, option.value)}
            >
              {option.name}
            </MDButton>
          ))}
        </Grid>
        <Grid item xs={12}>
          <FormField
            type={detail.type}
            label={detail.label}
            name={detail.name}
            value={detailValue}
            multiline
          />
        </Grid>
        <Grid item xs={6}>
          <FormField
            type={progress.type}
            label={progress.label}
            name={progress.name}
            placeholder={progress.placeholder}
            value={progressValue}
          />
        </Grid>
        {inputtedUrls.map((url, i) => (
          <>
            <Grid item xs={9}>
              <FormField
                type={urls.type}
                label={urls.label}
                name={urls.name}
                value={url}
                onChange={(e) => handleUrls(e, i)}
              />
            </Grid>
            <Grid item xs={3}>
              <MDBox pl={1}>
                {i === inputtedUrls.length - 1 ? (
                  <MDButton variant="outlined" color="info" iconOnly onClick={addUrlField}>
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                  </MDButton>
                ) : (
                  <MDButton
                    variant="outlined"
                    color="warning"
                    iconOnly
                    onClick={() => removeUrlField(i)}
                  >
                    <Icon sx={{ fontWeight: "bold" }}>remove</Icon>
                  </MDButton>
                )}
              </MDBox>
            </Grid>
          </>
        ))}
      </Grid>
      <MDButton disable={isSubmitting} type="submit" variant="gradient" color="dark">
        登録
      </MDButton>
    </MDBox>
  );
}
ModalForm.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default ModalForm;
