interface DocumentIdPageProps {
    params : Promise<{ documentId: string }>;
};
const DocumentIdPage = async ({ params } : DocumentIdPageProps) => {
    const { documentId } = await params;  

const DocumentIdPage = () => {  
    return ( 
        <div>
           Document ID : {documentId}
        </div>
    );
}
 
export default DocumentIdPage;