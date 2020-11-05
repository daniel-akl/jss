import React from 'react';
import { Text, Link } from '@sitecore-jss/sitecore-jss-nextjs';
import NextLink from 'next/link';

const GraphQLIntegratedDemo = (props) => {
  // Query results in integrated GraphQL replace the normal `fields` data
  // i.e. with { data, }
  const { datasource, contextItem } = props.fields.data;

  return (
    <div data-e2e-id="graphql-integrated">
      <h2>GraphQL Integrated Demo</h2>

      <p>
        Integrated GraphQL executes GraphQL queries within the Layout Service endpoint, and merges
        the query results into the Layout Service result JSON. The query results can be seen by
        inspecting the Layout Service response in the browser devtools network tab.
      </p>

      {datasource && (
        <div>
          <h4>Datasource Item (via Integrated GraphQL)</h4>
          id: {datasource.id}
          <br />
          name: {datasource.name}
          <br />
          sample1: {datasource.sample1.value}
          <br />
          sample1 (editable): <Text field={datasource.sample1.jss} />
          <br />
          sample2:
          <br />
          <ul>
            <li>text: {datasource.sample2.text}</li>
            <li>url: {datasource.sample2.url}</li>
            <li>target: {datasource.sample2.target}</li>
            <li>
              editable: <Link field={datasource.sample2.jss} />
            </li>
            <li>field type: {datasource.sample2.definition.type}</li>
            <li>field is shared?: {datasource.sample2.definition.shared.toString()}</li>
          </ul>
        </div>
      )}
      {contextItem && (
        <div>
          <h4>Route Item (via Integrated GraphQL)</h4>
          id: {contextItem.id}
          <br />
          page title: {contextItem.pageTitle.value}
          <br />
          children:
          <ul>
            {contextItem.children.map((child) => (
              <li key={child.id}>
                <NextLink href={child.url}><a>{child.pageTitle.value}</a></NextLink>&nbsp; (editable
                title too! <Text field={child.pageTitle.jss} />)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GraphQLIntegratedDemo;
