/**
 * Created by thana on 10/31/2016.
 */

// Convert Xml File into JSON object, given the file path
function convertXmlFileToJson(filePathToConvert) {

    var connect = new XMLHttpRequest();
    connect.open("GET", filePathToConvert, false);
    connect.setRequestHeader("Content-Type", "text/xml");
    connect.send(null);

    //return xmlToJSON.parseXML(connect.responseXML, myOptions);
    return xml2json.parser(new XMLSerializer().serializeToString(connect.responseXML));

}

// Get array of quizzes from the xml file, given the file path
function getArrayOfQuizzes(filePathToConvert) {
    // Obtain XML Results from our XML file path containing quizzes
    var xmlResult = convertXmlFileToJson(filePathToConvert);

    // Get the array of quizzes (see the xml file structure)
    return xmlResult.quizzes.quiz;
}

function findThaiNameSubject(subjectNameInEnglish) {
    var dict = {
        math: "คณิตศาสตร์",
        english: "ภาษาอังกฤษ",
        science: "วิทยาศาสตร์",
        thai: "ภาษาไทย",
        social: "สังคมศึกษา"
    }
    if (dict[subjectNameInEnglish] === undefined) {
        return "";
    }
    return dict[subjectNameInEnglish];
}